# Deployment & Custom Domain Guide

This guide walks you through deploying your portfolio to **Vercel** and linking your custom domains (**`rafayshhh.site`** or **`rafayshhh.website`**).

---

## 🚀 Step 1: Push Code to GitHub

1. Create a new empty repository on [GitHub](https://github.com/new) under your account `RafayShhh` (e.g. `portfolio` or `rafayshhh-website`).
2. In your terminal, run the following commands:
   ```bash
   git remote add origin https://github.com/RafayShhh/portfolio.git
   git branch -M main
   git push -u origin main
   ```

---

## ⚡ Step 2: Deploy to Vercel

1. Log in to [Vercel](https://vercel.com/) (sign in with your GitHub account).
2. Click **"Add New..."** &rarr; **"Project"**.
3. Locate your `portfolio` repository in the list and click **"Import"**.
4. In the configuration screen:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: `./` (default)
5. Expand the **"Environment Variables"** section and add the following keys:

| Variable Name | Example / Value | Description |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | `re_123456789...` | Your Resend API key from [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_RECEIVER_EMAIL` | `contact@rafayshhh.site` | The email address where contact messages should arrive |
| `NEXT_PUBLIC_SITE_URL` | `https://rafayshhh.site` | Your live production URL (used for canonical URLs and sitemaps) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `your-google-token` | Verification string from Google Search Console (optional) |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | `your-bing-token` | Verification string from Bing Webmaster Tools (optional) |

6. Click **"Deploy"**. Vercel will build and deploy your site in ~60 seconds and give you a free `*.vercel.app` preview URL.

---

## 🌐 Step 3: Connect Custom Domain (`rafayshhh.site` / `rafayshhh.website`)

1. In your Vercel Project Dashboard, navigate to **Settings** &rarr; **Domains**.
2. Type in your domain:
   - Example: `rafayshhh.site` (Vercel will recommend adding both `rafayshhh.site` and `www.rafayshhh.site`).
3. Click **Add**.
4. Vercel will provide the exact DNS records you need to enter at your domain registrar (Namecheap, GoDaddy, Cloudflare, Hostinger, Porkbun, etc.):

### Standard DNS Records:
- **Apex Domain (`rafayshhh.site`)**:
  - **Type**: `A`
  - **Name / Host**: `@` (or leave empty)
  - **Value / IP**: `76.76.21.21`
  - **TTL**: Auto or 3600
- **Subdomain (`www.rafayshhh.site`)**:
  - **Type**: `CNAME`
  - **Name / Host**: `www`
  - **Value**: `cname.vercel-dns.com.`
  - **TTL**: Auto or 3600

Once configured, Vercel automatically generates and renews a free **SSL certificate** (HTTPS) within a few minutes.

---

## ✉️ Step 4: Configuring Resend (Contact Form)

1. Create a free account at [resend.com](https://resend.com/).
2. Go to **API Keys** and click **Create API Key**.
3. Name it (e.g. `Portfolio Website`) and grant **Full Access**.
4. Copy the API key starting with `re_...` and add it to your Vercel Environment Variables as `RESEND_API_KEY`.
5. *(Optional for Custom Domain Sending)*:
   - In Resend, go to **Domains** &rarr; **Add Domain** (`rafayshhh.site`).
   - Add the TXT and MX records Resend provides to your DNS.
   - Once verified, you can send from `contact@rafayshhh.site` instead of the default `onboarding@resend.dev`!

---

## 🔄 Automatic CI/CD Workflow

Once connected to Vercel:
- Every time you push changes to your `main` branch (`git push origin main`), Vercel automatically creates an optimized production build and deploys it with zero downtime.
- If you open a pull request or push to another branch, Vercel creates a dedicated **Preview URL** so you can review changes before merging!
