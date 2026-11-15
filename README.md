# RafayShhh — Portfolio & Ecosystem

<p align="center">
  <img src="src/app/icon.svg" width="64" height="64" alt="RafayShhh Logo" />
</p>

<p align="center">
  <strong>The official personal portfolio and digital ecosystem of RafayShhh (Muhammad Abdul Rafay).</strong><br>
  Showcasing high-impact Minecraft mods & plugins, native Android applications, and modern software engineering.
</p>

<p align="center">
  <a href="https://rafayshhh.site">Live Website (rafayshhh.site)</a> •
  <a href="https://discord.gg/hMNg2mWSYn">Discord Community</a> •
  <a href="https://www.curseforge.com/members/rafayshhh/projects">CurseForge</a> •
  <a href="https://modrinth.com/user/RafayShhh">Modrinth</a> •
  <a href="https://github.com/RafayShhh">GitHub</a>
</p>

---

## 🌟 Highlights & Features

- **Signature Developer Aesthetic**: Deep obsidian canvas (`#08080a`) with glowing ruby/crimson accents (`#ef4444`, `#dc2626`, `#991b1b`), frosted glassmorphism, responsive cards, and clean typography.
- **Dedicated SEO Landing Pages**:
  - `/` — **Main Overview Hub**: Career timeline, featured bento grid, technical radar, and contact form.
  - `/mods` — **Minecraft Mods & Server Plugins**: Featuring **Shhh Brightness Toggle** (Fabric, 10k+ downloads, 1.20 - 1.21.x, hotkey lightmap control, zero potion particles), loader filters, and version matrices.
  - `/apps` — **Android Applications**: Native apps built with Kotlin, Jetpack Compose, Material You, offline-first Room DB, and direct APK download buttons.
  - `/projects` — **Software & Web Projects**: Full-stack services, developer automation CLI tools, and GitHub repositories.
- **Full Social & Community Integration**:
  - Discord server (`https://discord.gg/hMNg2mWSYn`) integrated into the navbar, hero, bento cards, and contact section.
  - Authentic SVG brand icons for GitHub, CurseForge, Modrinth, Discord, YouTube, X (Twitter), Instagram, Threads.
- **Resend Contact Integration**:
  - Serverless Next.js route handler (`/api/contact`) with anti-spam honeypot protection, optimistic feedback, and a 1-click "Copy Email" fallback (`contact@rafayshhh.site`).
- **Complete Search Engine Optimization**:
  - Schema.org JSON-LD structured data (`Person`, `WebSite`, `SoftwareApplication`, `MobileApplication`).
  - Dynamic `sitemap.xml` and `robots.txt` prioritizing `/mods`, `/apps`, and `/projects`.
  - Ready for Google Search Console and Bing Webmaster Tools verification.
- **Data-Driven Architecture**: All mods, apps, projects, jobs, and socials are defined in typed data files under `src/data/`, allowing effortless updates without editing UI code.

---

## 🚀 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) with React 19 |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with custom crimson/obsidian theme |
| **Icons** | [Lucide React](https://lucide.dev/) + Authentic Brand SVGs |
| **Email API** | [Resend](https://resend.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Documentation Directory

Comprehensive guides are available in the [`docs/`](docs/) directory:

- 🏛️ [**Architecture & System Design**](docs/ARCHITECTURE.md): Complete directory structure, design system, and technical conventions.
- ⚡ [**Deployment & Custom Domains**](docs/DEPLOYMENT.md): Step-by-step instructions for deploying to Vercel and configuring DNS for `rafayshhh.site` / `rafayshhh.website`.
- 🔍 [**SEO & Webmaster Verification**](docs/SEO.md): Setting up Google Search Console, Bing Webmaster Tools, Schema.org verification, and link previews.
- ✏️ [**Content Management Guide**](docs/CONTENT_GUIDE.md): How to add new Minecraft mods, Android apps, and projects in 2 minutes.

---

## 🛠️ Quick Start (Local Development)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RafayShhh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   *(Note: The contact form works in simulation dev mode even before adding your keys).*

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the site.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel in 3 Steps

1. Push this repository to your GitHub account (`RafayShhh`).
2. Go to [vercel.com](https://vercel.com/) &rarr; Import repository.
3. Add your environment variables (`RESEND_API_KEY`, `CONTACT_RECEIVER_EMAIL`, `NEXT_PUBLIC_SITE_URL`) & click **Deploy**!
4. Connect your custom domain `rafayshhh.site` or `rafayshhh.website` in **Settings &rarr; Domains**.

---

## 📜 License

MIT &copy; [RafayShhh](https://rafayshhh.site) (Muhammad Abdul Rafay). All rights reserved.
