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

## Option 1: GitHub Pages (Automated & Recommended)
I've already set up a **GitHub Action** in your project. This means your site will automatically deploy whenever you push code to GitHub.

### Steps to set up:
1. Create a new repository on GitHub.
   - If you want the URL to be `borisvelasevic.github.io`, name the repo `borisvelasevic.github.io`.
   - If you name it anything else (e.g., `personal-site`), the URL will be `borisvelasevic.github.io/personal-site/`.
2. Push your code to this repository:
   ```bash
   git remote add origin https://github.com/yourusername/reponame.git
   git branch -M master
   git push -u origin master
   ```
3. Go to your repository on GitHub: **Settings > Pages**.
4. Under **Build and deployment > Source**, ensure **"GitHub Actions"** is selected.
5. Your site will automatically build and go live!

## Option 3: Caltech Hosting
If you want to use your Caltech domain:
1. Run `npm run build` (I already did this for you).
2. Use an SFTP client (like Cyberduck or FileZilla) to connect to `sftp.hss.caltech.edu` (or your specific department server).
3. Upload the contents of the `dist/` folder to your `public_html` directory.

---
**Status:** I have already built the production files in the `dist/` folder. You can test them locally by running `npx vite preview`.
