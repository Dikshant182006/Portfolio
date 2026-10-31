# ⚡ Dikshant Sharma — Personal Portfolio

An editorial, high-contrast, modern developer portfolio website designed for **Dikshant Sharma** (Full Stack Developer & Next.js Engineer).

Styled with the exact visual language, typography, dark luxury aesthetic, and interactivity of [Sarthak Sharma's Portfolio](https://sarthak-sharma-portfolio-six.vercel.app/), customized with Dikshant's real background, production systems, and live applications.

---

## 🌟 Key Highlights & Design System

- **Editorial Typography**: Pairing *Instrument Serif* for expressive titles with *DM Sans* for sleek UI copy and *JetBrains Mono* for system metrics and code.
- **Atmospheric Visuals**: Ultra-deep `#030303` matte canvas with ambient orange-amber (`#ff8c59`) radial glow and noise texture.
- **Glassmorphism Navigation**: Floating navigation pill with real-time backdrop blur, glowing wordmark, and mobile responsive drawer.
- **Live Work Showcase**:
  - **CryptoPlace** (`my-crypto-place.vercel.app`) with interactive crypto tickers, price charts, and search preview.
  - **Enterprise Inventory & Order Management System** (`Next.js + Prisma + MySQL`) with ERP stock levels and table preview.
  - **Enterprise ERP & POS Platform** (Active Internship project) with production workflow code terminal.
  - **Taskify** (React Todo App) with real-time task checklist mock.
  - **GitHub Profile Viewer** with live repo explorer card.
- **Interactive Features**:
  - Live Scroll Progress indicator at the top.
  - Motion toggle (`MOTION ON / OFF`) preserving user preferences in `localStorage`.
  - Interactive Discipline Tabs (Frontend, Backend, System Architecture).
  - One-click copy email button with instant "Copied!" feedback.
  - Live Indian Standard Time (IST) clock running dynamically in the footer.
  - Responsive design optimized for phones, tablets, and desktop displays.

---

## 🚀 Running Locally

### Option 1: Double-Click
Simply double-click `index.html` in your file explorer to open it directly in Google Chrome, Edge, or Brave.

### Option 2: Local Static Server (Recommended)
From the `Portfolio` directory in your terminal:

```bash
# Using npx serve (instant, no install needed)
npx serve .

# Or using Python 3
python -m http.server 3000
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🖼️ How to Add or Change Your Photo

1. Place your photo inside the `assets/` folder.
2. Name it `avatar.png` (or `avatar.jpg`).
3. If using a `.jpg`, open `index.html` and update line 183:
   ```html
   <img id="profileImage" src="assets/avatar.jpg" alt="Dikshant Sharma" class="portrait-img" />
   ```
4. It will immediately render inside the editorial portrait frame with subtle grayscale and hover contrast.

---

## 🌐 Deploying to Vercel (1-Click)

### Via Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Via GitHub + Vercel Dashboard:
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Dikshant Sharma portfolio"
   git branch -M main
   git remote add origin https://github.com/Dikshant182006/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), select your `portfolio` repository, and click **Deploy**. Vercel will automatically host it with zero build configuration!

---

## 📬 Contact & Links

- **Email**: [dikshantsharma098@gmail.com](mailto:dikshantsharma098@gmail.com)
- **LinkedIn**: [linkedin.com/in/dikshanturl](https://www.linkedin.com/in/dikshanturl)
- **GitHub**: [github.com/Dikshant182006](https://github.com/Dikshant182006)
- **Latest Project**: [my-crypto-place.vercel.app](https://my-crypto-place.vercel.app/)

