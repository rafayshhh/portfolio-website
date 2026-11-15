# RafayShhh — Developer & Modder Portfolio Platform

A modern, high-performance personal portfolio website for **RafayShhh** (`rafayshhh.site` / `rafayshhh.website`). Built specifically to showcase **Minecraft mods & plugins**, **native Android applications**, **software projects**, and community links.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom obsidian & crimson/red developer-craft aesthetic
- **Type Safety**: TypeScript 5
- **Icons**: [Lucide React](https://lucide.dev/)
- **Contact API**: [Resend](https://resend.com/) email delivery with anti-spam honeypot
- **Search Engine Optimization**: Dynamic `sitemap.xml`, `robots.txt`, Schema.org JSON-LD structured data, Google Search Console & Bing Webmaster verification
- **Deployment**: [Vercel](https://vercel.com/) (zero-config static & edge deployment)

---

## 📂 Architecture & Dedicated Landing Pages

| Route | Purpose | SEO Target |
| :--- | :--- | :--- |
| `/` | **Main Hub**: Executive overview, featured bento grid, career milestones, skills, and Resend contact form | Personal Brand, Full-Stack Engineer, General Showcase |
| `/mods` | **Minecraft Mods & Plugins**: Detailed showcase of **Shhh Brightness Toggle**, Fabric/Forge/NeoForge loader filters, version matrices, CurseForge & Modrinth install links | Minecraft Modder, Fabric Utility Mods, Brightness Toggle |
| `/apps` | **Android Apps**: Native mobile applications, phone frame previews, APK direct downloads, Kotlin & Jetpack Compose architecture | Android Developer, Kotlin, Jetpack Compose Apps |
| `/projects` | **Software & Web Projects**: Full-stack services, developer tools, CLI utilities, and GitHub repos | Software Engineer, Developer Tools, Open Source |
| `/api/contact` | **Resend Route Handler**: Secure, server-side email dispatch with honeypot spam protection | N/A (Headless API) |

---

## 🛠️ Local Development

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Add your keys:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_RECEIVER_EMAIL=your-email@example.com
   NEXT_PUBLIC_SITE_URL=https://rafayshhh.site
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code
   NEXT_PUBLIC_BING_SITE_VERIFICATION=your-bing-verification-code
   ```
   *(Note: The contact form will simulate successful delivery in dev mode if `RESEND_API_KEY` is not yet set).*

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

1. Push your code to your GitHub repository under `RafayShhh`.
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Under **Environment Variables**, add:
   - `RESEND_API_KEY`: Your Resend API key (from [resend.com](https://resend.com/api-keys)).
   - `CONTACT_RECEIVER_EMAIL`: The email address where you want to receive messages.
   - `NEXT_PUBLIC_SITE_URL`: `https://rafayshhh.site` (or `https://rafayshhh.website`).
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: (From Google Search Console).
   - `NEXT_PUBLIC_BING_SITE_VERIFICATION`: (From Bing Webmaster Tools).
5. Click **Deploy**.
6. Under **Settings → Domains**, connect your custom domain `rafayshhh.site` or `rafayshhh.website`.

---

## 🔍 Google Search Console & Bing Webmaster Setup

1. **Google Search Console**:
   - Add your domain (`rafayshhh.site`).
   - Choose **HTML tag** verification method.
   - Copy the string inside `content="..."` and paste it into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel.
   - Submit your sitemap URL: `https://rafayshhh.site/sitemap.xml`.

2. **Bing Webmaster Tools**:
   - Add your site or import directly from Google Search Console.
   - If using meta tag, copy the verification code into `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
   - Submit sitemap: `https://rafayshhh.site/sitemap.xml`.

---

## ✏️ Updating Your Content

All data is separated cleanly from UI components:
- Edit Minecraft mods in `src/data/mods.ts`
- Edit Android apps in `src/data/apps.ts`
- Edit web projects in `src/data/projects.ts`
- Edit career experience in `src/data/experience.ts`
- Edit social links in `src/data/socials.ts`

---

## 📜 License
MIT &copy; RafayShhh (Muhammad Abdul Rafay)
