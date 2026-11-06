# root@charmine:~ — Charmine's Portfolio

Hi, I'm Charmine Yang, a Cybersecurity & Digital Forensics student at
Nanyang Polytechnic. I built this portfolio to introduce myself, share the
projects I have worked on, and document the events and opportunities that have
shaped my learning journey.

The site has a terminal-inspired design because it reflects my interest in
cybersecurity, computing, and the practical side of technology. It is built
from scratch with HTML, CSS, and vanilla JavaScript, without a framework or
build step.

## What you'll find here

- My education, experience, and current learning journey
- Projects involving Python, web applications, cybersecurity, and data
  visualisation
- Events I attended or contributed to, including workshops, CTFs, and
  community outreach
- A responsive interface with project and event details, image galleries, and
  accessible keyboard interactions

## Built with

- Semantic HTML5
- CSS3 with custom properties, Grid, Flexbox, animations, and responsive
  breakpoints
- Vanilla JavaScript (ES6+)
- Native `<dialog>` for project and event pop-ups
- `IntersectionObserver` and `requestAnimationFrame` for scroll interactions

## Project structure

```text
charmine-portfolio-website/
├── index.html              # Page content and portfolio sections
├── css/
│   └── style.css           # Layout, theme, animations, and responsive styles
├── js/
│   ├── projects-data.js    # Project and event pop-up content
│   └── main.js             # Interactions and dynamic behaviour
├── images/
│   └── details/            # Images used in project and event galleries
├── assets/                 # Resume placeholder and other downloadable assets
└── README.md
```

## Updating project and event details

The cards displayed on the site are in `index.html`. Their pop-up content is
defined in `js/projects-data.js`. Each entry uses the same key as the card's
`data-id`:

```js
'proj-threat-intel-visualisation': {
  title: "Threat Intelligence Visualisation",
  images: [
    'images/details/proj-threat-intel-visualisation-1.jpeg',
    'images/details/proj-threat-intel-visualisation-2.jpeg'
  ],
  text: [
    "Add a project description here."
  ]
}
```

Add gallery images to `images/details/` and list their paths in the matching
entry. The gallery automatically lays images out in rows of three.

## Run locally

There is no build step. From the repository directory, run:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. You can also use the Live Server extension
in VS Code.

## Deploy

This is a static website and can be deployed to GitHub Pages or any other
static hosting provider. For GitHub Pages, select the `main` branch under
**Settings → Pages**.

## Connect with me

- LinkedIn: [linkedin.com/in/charmine-yang-963b0b335](http://linkedin.com/in/charmine-yang-963b0b335)
- Email: yangkaijing2408@gmail.com

Thanks for visiting my repository and taking a look at my work.

`</>` with ❤️ by Charmine Yang © 2026
