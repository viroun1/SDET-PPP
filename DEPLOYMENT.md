# Deployment notes

Phase 1 — NJIT server

1. Zip the `PortfolioWebDesign` folder or upload files via SFTP to your NJIT account's public_html or assigned directory.
2. Ensure `index.html` is at the root of the deployed directory.
3. Set file permissions to be world-readable (if required by the server).

Example commands (macOS zsh):

```bash
# create a zip in the parent directory
cd ~/Downloads/SDET
zip -r PortfolioWebDesign.zip PortfolioWebDesign

# upload via scp (edit user@host and destination path)
# scp PortfolioWebDesign.zip user@njit.example.edu:/home/youruser/public_html/
```

Phase 2 — AWS (S3)

1. Create an S3 bucket and enable static website hosting.
2. Upload the site files and set public read access (or use CloudFront).
3. Optionally configure Route53 for a custom domain.

AWS Amplify

1. Connect your GitHub repo to Amplify and configure build settings (no build for static HTML).
2. Amplify will host and provide a TLS-enabled URL.

Security note: Do not commit secrets. This repository contains only static assets.
