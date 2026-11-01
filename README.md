# Royce Cook — Professional Portfolio

A personal portfolio for my work in technical communication and my doctoral studies in Technical Communication and Rhetoric at Texas Tech University. The site brings together professional practice, research interests, and a brief introduction to my life beyond the desk.

[View the portfolio](https://roycecook96.github.io/royce-cook-portfolio/)

## Content

- **About and current work:** My background and responsibilities as a technical writer at Docusign.
- **Selected work:** Four project narratives covering Web Forms documentation, Workspaces release notes, the Release Notes FAQ, and an AI-assisted Release Notes Assistant using Atlassian Rovo.
- **Professional philosophy:** Reader-centered organization, accessibility, collaboration, and human accountability.
- **Research:** My developing interest in enterprise documentation as customer support infrastructure, including a comparison of potential AI support and human review.
- **Beyond the desk:** A brief introduction to riding and my focus on confidence, fundamentals, and consistent practice.
- **Contact:** A selectable email address and a Copy email button.

## Design and accessibility

The site uses an ivory, burgundy, and sage palette, serif headings, responsive CSS Grid layouts, and lightweight local SVG illustrations. Accessibility features include semantic landmarks, a skip link, ordered headings, descriptive image alternatives, visible keyboard focus, scoped table headers, balanced heading wrapping, and reduced-motion support. A print stylesheet is also included.

## Files

```text
index.html          Page content and semantic structure
styles.css          Design system, responsive layouts, and print styles
contact.js          Email copying and accessible status messages
assets/horse.svg    Horse illustration
assets/monogram.svg Favicon
```

The site uses plain HTML, CSS, and a small JavaScript enhancement. No build step, external fonts, or package installation is required.

## Preview and publish

Open `index.html` in a browser to preview the content and layout. Clipboard access depends on browser permissions and context; test the Copy email button on the live HTTPS site. If clipboard access fails, the script highlights the address and provides manual-copy instructions. Without JavaScript, the address remains visible and selectable.

To update the existing GitHub Pages site:

1. Upload changed files to the repository’s top level, keeping `index.html`, `styles.css`, `contact.js`, and `assets/` together. Do not upload an enclosing ZIP or extra portfolio folder.
2. Commit the changes to the branch used by GitHub Pages.
3. Wait for the Pages deployment to finish in Actions.
4. Refresh the live site and check the updated sections.

## Work sample context

The Selected Work section links to public documentation and technology resources. The Release Notes FAQ revisions and Rovo assistant are described as work in progress. The published FAQ may not yet reflect the revisions discussed in the narrative.

The Rovo project is presented conceptually. Internal prompts, configurations, source materials, and screenshots are not included. Atlassian and Slack links provide technology background; they are not demonstrations of the internal assistant. This personal portfolio does not imply endorsement by Docusign, Atlassian, or Slack.
