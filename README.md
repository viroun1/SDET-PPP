# PortfolioWebDesign

This is a simple personal portfolio website built with HTML, CSS, and JavaScript. It includes:

- Home, About, Projects, Skills, and Contact pages
- Responsive navigation (hamburger on small screens)
- Image slider for project highlights
- Accessible markup with ARIA attributes and focus styles
- Basic client-side form validation (demo only)

How to use

1. Open `PortfolioWebDesign/index.html` in a browser to view the site locally.
2. Replace placeholder text, images in `assets/`, and links with your real content.

Deployment

- Phase 1: Upload the site folder contents to your NJIT web server (ask your instructor for the upload path). A ZIP of the folder is usually accepted.
- Phase 2: Host on AWS S3 (static site) or use AWS Amplify for continuous deploys. See `DEPLOYMENT.md` for example steps.

Scripts

Two helper scripts are included to make deployment easier:

- `deploy-zip.sh` — creates a zip of the site folder ready to upload.
- `deploy-scp.sh` — example SCP command template to upload to a remote server (edit user/host/path before running).
