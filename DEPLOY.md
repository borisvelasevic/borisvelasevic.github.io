# Deploying your website

I've prepared your project for deployment. Here are the three easiest ways to get it live:

## Option 1: Vercel (Recommended & Fastest)
Vercel is built for Vite projects. You don't even need to use the command line if you don't want to.
1. Go to [vercel.com](https://vercel.com) and create a free account.
2. Select **"Import Project"**.
3. Connect your GitHub account and select this repository (once you've pushed it to GitHub).
4. Vercel will automatically detect the settings and deploy it.

**Alternatively, use the CLI:**
Run this command in the `website/` folder on your terminal:
```bash
npx vercel
```
It will guide you through a literal 1-minute setup.

## Option 2: GitHub Pages
Since you are likely already using GitHub:
1. Create a new repository on GitHub named `boris-velasevic.github.io`.
2. Push this code to that repository.
3. The site will be available at `https://boris-velasevic.github.io`.

## Option 3: Caltech Hosting
If you want to use your Caltech domain:
1. Run `npm run build` (I already did this for you).
2. Use an SFTP client (like Cyberduck or FileZilla) to connect to `sftp.hss.caltech.edu` (or your specific department server).
3. Upload the contents of the `dist/` folder to your `public_html` directory.

---
**Status:** I have already built the production files in the `dist/` folder. You can test them locally by running `npx vite preview`.
