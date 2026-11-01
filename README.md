# root@charmine:~ — Personal Portfolio

A terminal-themed personal portfolio website built from scratch with **HTML5, CSS3 and vanilla JavaScript** — no frameworks or libraries.

Charmine Yang · Cybersecurity & Digital Forensics student, Nanyang Polytechnic

---

## Features

| Feature | How it's built |
|---|---|
| Terminal / hacker aesthetic | Monospace headings, `./` command-style labels, CSS custom properties for the colour theme |
| Typing effect | JS loop that types and deletes words with configurable speeds |
| Scroll-reveal animations | `IntersectionObserver` adds a class when elements enter the viewport |
| Scroll-driven timeline | Centre line fills as you scroll (`getBoundingClientRect` + `requestAnimationFrame` throttling); cards alternate left/right on desktop and collapse to a single column on mobile |
| Tabbed project / event gallery | Accessible tabs (`role="tab"`, `aria-selected`) switching between three CSS Grid layouts with staggered entrance animations |
| Terminal-window cards | Title-bar "traffic light" dots drawn with layered `radial-gradient`s in a `::before` pseudo-element — no extra markup or images |
| Hover effects | Image zoom, overlay fade-in, lift and glow |
| Fully responsive | CSS Grid + Flexbox with breakpoints at 1060px, 860px, 700px, 480px and 340px |
| Project / event detail pop-up | Native `<dialog>` built from a separate data file (`projects-data.js`): 3-column image gallery with unlimited rows, description below, click-to-enlarge lightbox, closes with ×, Esc or clicking outside, keyboard accessible, focus returns to the card |
| Missing-image fallback | JS swaps any image that fails to load for a labelled placeholder showing the expected file path |

## Project structure

```
charmine-portfolio/
├── index.html          # Page structure / content
├── css/
│   └── style.css       # All styling, organised into numbered sections
├── js/
│   ├── projects-data.js  # Pop-up content: images + text for each card
│   └── main.js           # All interactivity, one function per feature
├── images/             # Photos, logos, project thumbnails (see images/README.md)
│   └── details/        # Pop-up gallery images
├── assets/
│   └── resume.pdf      # Linked from the nav and "My Resume" button
└── README.md
```

## Editing pop-up content

Each project/event card opens a pop-up. Its images and text live in `js/projects-data.js`:

```js
'proj-threat-intel-visualisation': {
  title: "Threat Intelligence Visualisation",
  images: [
    'images/details/proj-threat-intel-visualisation-1.jpeg',
    'images/details/proj-threat-intel-visualisation-2.jpeg'
    // add as many as you like — 3 per row, extra rows are added automatically
  ],
  text: [
    "First paragraph...",
    "Second paragraph..."
  ]
},
```

## Running locally

No build step. Either open `index.html` directly in a browser, or serve the folder:

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000
```

Or use the **Live Server** extension in VS Code.

## Deploying

Works on any static host, e.g. **GitHub Pages**: push the folder to a repo, then go to *Settings → Pages* and choose the `main` branch.

## Skills demonstrated

- Semantic HTML5 and ARIA attributes for accessibility
- Modern CSS: custom properties, Grid, Flexbox, pseudo-elements, keyframe animations, transitions, `aspect-ratio`, `mask-image`, media queries
- Vanilla JavaScript (ES6+): data-driven rendering, native `<dialog>` modal, DOM manipulation, event handling, `IntersectionObserver`, `requestAnimationFrame`, modular feature functions
- Separation of concerns (structure / presentation / behaviour)
- Responsive, mobile-first layout testing

## Contact

- LinkedIn: [linkedin.com/in/charmine-yang-963b0b335](http://linkedin.com/in/charmine-yang-963b0b335)
- Email: yangkaijing2408@gmail.com

---

`</>` with ❤️ by Charmine Yang © 2026
