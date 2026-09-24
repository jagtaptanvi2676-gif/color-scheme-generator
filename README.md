# 🎨 Color Picker & Scheme Generator

A modern, high-contrast web application that allows designers and developers to pick any base color, select a color theory harmony mode, and instantly generate cohesive 6-color palettes complete with clean HEX codes. Built with vanilla HTML, CSS, and JavaScript.

---

## Features

* **Interactive Base Color Selection:** Select any color using the visual HTML color picker input.
* **6 Color Harmony Modes:** Dynamic API requests supporting **Triad**, **Complement**, **Analogic**, **Quad**, **Monochrome**, and **Monochrome-Light** schemes.
* **Responsive Layout:**
  * **Desktop ($\ge$1024px):** 3-column x 2-row grid dashboard with side-by-side controls.
  * **Tablet (<1024px):** Form controls automatically stack above the palette grid.
  * **Mobile (<693px):** Fluid 2-column x 3-row swatch grid with full-width custom input controls.
* **Reflow Animation:** Smooth `@keyframes fadeIn` triggering every time a new palette is generated.
* **Custom Control Styling:** Modern dropdown styling using inline SVG indicators, customized native color pickers, and high-contrast call-to-action buttons.

---

## Tech Stack

* **Frontend:** Standard HTML5, CSS3 (CSS Grid, Flexbox, Keyframes, Media Queries), JavaScript (ES6+ Fetch API, DOM Manipulation)
* **Font Provider:** Google Fonts (*Noto Serif*), Online Web Fonts (*Halyard Display*)
* **API:** [The Color API](https://www.thecolorapi.com/)
* **Deployment:** GitHub & Netlify

---

##  Project Structure

```text
├── index.html       # HTML structure (Form, Inputs, Grid Container)
├── style.css        # Responsive styling & media queries
├── index.js         # API Fetching, Event Listeners, and DOM Rendering
└── README.md        # Project documentation