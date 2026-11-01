/* ==========================================================================
   Charmine Yang — Portfolio
   main.js
   --------------------------------------------------------------------------
   1. Image placeholders   – shows the expected file name if an image is missing
   2. Typing effect        – "I'm passionate about ..." rotating words
   3. Project/event tabs   – switches between the three card grids
   4. Scroll reveal        – fades/slides elements in as they enter the viewport
   5. Timeline progress    – fills the centre line of the timeline on scroll
   6. Detail modal         – pop-up with image gallery + text for each card,
                             content comes from js/projects-data.js
   ========================================================================== */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initImagePlaceholders();
  initTypingEffect();
  initTabs();
  initScrollReveal();
  initTimelineProgress();
  initDetailModal();
});


/* --------------------------------------------------------------------------
   1. Image placeholders
   Replaces any image that fails to load with a striped box showing its path,
   so it is obvious which file still needs to be added to /images.
   -------------------------------------------------------------------------- */
function toPlaceholder(img) {
  const box = document.createElement('div');
  box.className = `ph ${img.className}`.trim();
  box.innerHTML = `<span>&#128247;</span><code>${img.getAttribute('src')}</code>`;
  img.replaceWith(box);
}

// Swap the image for a placeholder if it is (or becomes) broken
function watchImage(img) {
  if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) {
    toPlaceholder(img);
  } else {
    img.addEventListener('error', () => toPlaceholder(img), { once: true });
  }
}

function initImagePlaceholders() {
  // Skip the lightbox image, which starts with no src
  document.querySelectorAll('img:not(#lightboxImg)').forEach(watchImage);
}


/* --------------------------------------------------------------------------
   2. Typing effect
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const target = document.getElementById('typed');
  if (!target) return;

  const words = ['cybersecurity.', 'networking.', 'Python.', 'database security.'];
  const TYPE_SPEED = 90;     // ms per character typed
  const DELETE_SPEED = 45;   // ms per character deleted
  const HOLD_TIME = 1400;    // ms to pause on a full word
  const NEXT_DELAY = 300;    // ms before typing the next word

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const word = words[wordIndex];
    target.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex < word.length) {
      charIndex++;
      setTimeout(tick, TYPE_SPEED);
    } else if (!deleting) {
      deleting = true;
      setTimeout(tick, HOLD_TIME);
    } else if (charIndex > 0) {
      charIndex--;
      setTimeout(tick, DELETE_SPEED);
    } else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(tick, NEXT_DELAY);
    }
  };

  tick();
}


/* --------------------------------------------------------------------------
   3. Project / event tabs
   Each .tab button has data-tab="<grid id>". Switching replays the card
   entrance animation with a small stagger.
   -------------------------------------------------------------------------- */
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const grids = document.querySelectorAll('.grid');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      grids.forEach((g) => { g.hidden = true; });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const grid = document.getElementById(tab.dataset.tab);
      grid.hidden = false;

      grid.querySelectorAll('.item').forEach((card, i) => {
        card.style.animation = 'none';
        void card.offsetWidth; // force reflow so the animation restarts
        card.style.animation = `pop .5s ease ${i * 0.05}s both`;
      });
    });
  });
}


/* --------------------------------------------------------------------------
   4. Scroll reveal
   Adds .in to every .reveal element once it is 15% visible.
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');

  // Fallback for very old browsers: just show everything
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((el) => observer.observe(el));
}


/* --------------------------------------------------------------------------
   5. Timeline progress line
   The glowing line grows to follow a point 60% down the viewport.
   -------------------------------------------------------------------------- */
function initTimelineProgress() {
  const timeline = document.getElementById('timeline');
  const fill = document.getElementById('tlFill');
  if (!timeline || !fill) return;

  let ticking = false;

  const update = () => {
    const rect = timeline.getBoundingClientRect();
    const marker = window.innerHeight * 0.6;
    const progress = Math.min(Math.max((marker - rect.top) / rect.height, 0), 1);
    fill.style.height = `${progress * rect.height}px`;
    ticking = false;
  };

  // Throttle with requestAnimationFrame for smooth scrolling
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}


/* --------------------------------------------------------------------------
   6. Detail modal
   Clicking (or pressing Enter/Space on) a card with data-id="<key>" opens a
   native <dialog> filled from PROJECT_DETAILS[<key>] in projects-data.js:
     - title
     - images  → 3-column gallery, as many rows as needed
     - text    → paragraphs below the gallery
   Clicking a gallery image opens it full size (lightbox).
   -------------------------------------------------------------------------- */
function initDetailModal() {
  const modal = document.getElementById('detailModal');
  if (!modal || typeof PROJECT_DETAILS === 'undefined') return;

  const titleEl = document.getElementById('modalTitle');
  const galleryEl = document.getElementById('modalGallery');
  const textEl = document.getElementById('modalText');
  const closeBtn = modal.querySelector('.modal-close');
  const scrollArea = modal.querySelector('.modal-inner');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  let lastFocused = null; // return focus to the card after closing

  /* ---- build + open ---- */
  const openModal = (card) => {
    const id = card.dataset.id;
    const data = PROJECT_DETAILS[id] || {};

    // Fall back to the card's own title if the data entry is missing
    titleEl.textContent = data.title || card.querySelector('h6').textContent;

    galleryEl.replaceChildren();
    (data.images || []).forEach((src, i) => {
      const img = document.createElement('img');
      img.className = 'gallery-img';
      img.src = src;
      img.alt = `${titleEl.textContent} — image ${i + 1}`;
      img.loading = 'lazy';
      img.addEventListener('click', () => openLightbox(img));
      galleryEl.appendChild(img);
      watchImage(img);
    });

    textEl.replaceChildren();
    (data.text || []).forEach((para) => {
      const p = document.createElement('p');
      p.textContent = para; // textContent, not innerHTML, so no HTML injection
      textEl.appendChild(p);
    });

    lastFocused = card;
    scrollArea.scrollTop = 0;
    document.body.classList.add('modal-open');
    modal.showModal();
    closeBtn.focus();
  };

  /* ---- close ---- */
  const closeModal = () => modal.close();

  modal.addEventListener('close', () => {
    closeLightbox();
    document.body.classList.remove('modal-open');
    if (lastFocused) lastFocused.focus({ preventScroll: true });
  });

  closeBtn.addEventListener('click', closeModal);

  // Click on the dark backdrop (outside the panel) closes the modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Esc: close the lightbox first if it is open, otherwise the modal
  modal.addEventListener('cancel', (e) => {
    if (!lightbox.hidden) {
      e.preventDefault();
      closeLightbox();
    }
  });

  /* ---- lightbox ---- */
  function openLightbox(img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
  }
  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.removeAttribute('src');
  }
  lightbox.addEventListener('click', closeLightbox);

  /* ---- wire up the cards (mouse + keyboard) ---- */
  document.querySelectorAll('.item[data-id]').forEach((card) => {
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });
}
