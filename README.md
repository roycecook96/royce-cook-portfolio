# Royce Cook — Professional Portfolio

A personal portfolio focused on AI-assisted documentation: my work as a Technical Writer 3 at Docusign, my open-source documentation contributions, and my doctoral research in Technical Communication and Rhetoric at Texas Tech University.

[View the portfolio](https://roycecook96.github.io/royce-cook-portfolio/)

## Content

- **Hero:** Who I am and what I do, with contact as the main call to action.
- **About and current work:** Building AI agents and workflows for documentation at Docusign.
- **Selected work:** Four projects, each with a labeled role, tools, and status:
  1. Release Notes Agent, an Atlassian Rovo agent and Slack intake workflow for release notes
  2. Roboflow Supervision, a merged open-source contribution to a computer vision tutorial
  3. Docusign Workspaces Release Notes
  4. Docusign Release Notes FAQ
- **Professional philosophy:** Reader-centered organization, accessibility, collaboration, and human accountability in AI-assisted work.
- **Research:** My dissertation focus on enterprise documentation as customer support infrastructure, my November 2026 meetup talk, and a comparison of AI support and human review.
- **Beyond the desk:** Riding.
- **Contact:** Email link, a Copy email button, and a GitHub profile link.

## AI-ready design

The Selected work section is designed to be easy for AI tools and search engines to read accurately:

- **Structured data:** A JSON-LD block (schema.org `Person` and an `ItemList` of `CreativeWork` entries) describes me and each project in machine-readable form.
- **Labeled facts:** Each project states its role, tools, and status in a definition list, so the key facts are explicit rather than implied in prose.
- **Machine-readable dates:** Dates use the `<time>` element with `datetime` values.
- **Semantic structure:** Each project is an `<article>` with a heading, a one-line summary, and descriptive link text.

## Design and accessibility

The site uses an ivory, burgundy, and sage palette, serif headings, and responsive CSS Grid layouts. Accessibility features include semantic landmarks, a skip link, ordered headings, descriptive alt text, visible keyboard focus, scoped table headers, back-to-top links, external links labeled "(opens in new window)", and reduced-motion support. A print stylesheet is included.

The live site was checked with WAVE: 0 errors and 0 contrast errors. The remaining "possible heading" alerts flag the hero tagline and hero quote, which are intentionally styled text rather than headings.

## Files

```text
index.html              Page content, semantic structure, and structured data
styles.css              Design system, responsive layouts, and print styles
contact.js              Email copying and accessible status messages
assets/riding-saddle.jpg  Riding section photo
assets/roboflow-prerequisites.png  Screenshot of the published Roboflow tutorial section
assets/social-preview.png  Image shown when the site link is shared
assets/monogram.svg     Favicon
```

The site uses plain HTML, CSS, and a small JavaScript enhancement. No build step, external fonts, or package installation is required.

## Preview and publish

Open `index.html` in a browser to preview the site. Test the Copy email button on the live HTTPS site, since clipboard access depends on browser permissions. If clipboard access fails, the script highlights the address and provides manual-copy instructions.

The site deploys from the `main` branch with GitHub Pages. When you change `styles.css` or `contact.js`, update the `?v=` value on its link in `index.html` so browsers load the new version instead of a cached copy.

## Work sample context

The Release Notes Agent is a confidential internal project and is described at a high level. Internal prompts, configurations, source materials, and screenshots are not included. The Atlassian and Slack links provide technology background; they are not demonstrations of the agent. This personal portfolio does not imply endorsement by Docusign, Atlassian, Slack, or Roboflow.
