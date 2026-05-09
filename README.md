# 🌟 Leela Chouhan — Personal Portfolio

A modern, responsive developer portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start (Run Commands)

```bash
# 1. Go into the project folder
cd leela-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

### Build for Production
```bash
npm run build        # Creates /dist folder
npm run preview      # Preview the production build
```

---

## 📁 Folder Structure

```
leela-portfolio/
├── public/
│   ├── favicon.svg          # Site icon
│   ├── Leela_Resume.pdf     # ⬅️ PUT YOUR RESUME PDF HERE
│   └── images/
│       ├── profile.jpg      # ⬅️ PUT YOUR PROFILE PHOTO HERE
│       ├── ecommerce.png    # Project screenshots (optional)
│       ├── todo.png
│       ├── youtube.png
│       └── weather.png
├── src/
│   ├── components/
│   │   ├── Loader.jsx       # Loading screen animation
│   │   ├── Navbar.jsx       # Sticky navigation + dark mode toggle
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About me section
│   │   ├── Skills.jsx       # Skills with progress bars
│   │   ├── Projects.jsx     # Project cards
│   │   ├── Journey.jsx      # Timeline / learning journey
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── portfolioData.js # ⬅️ ALL YOUR PERSONAL INFO LIVES HERE
│   ├── hooks/
│   │   ├── useTheme.js      # Dark/light mode hook
│   │   └── useScrollReveal.js # Intersection observer hook
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind
├── index.html               # HTML template + Google Fonts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ Where to Update Your Details

### 1. `src/data/portfolioData.js`  ← **Main file to edit**

Everything about you is here:

| Field | What to change |
|-------|----------------|
| `name` | Your full name |
| `tagline` | Your tagline |
| `email` / `phone` | Contact details |
| `github` / `linkedin` / `twitter` | Your social URLs |
| `profileImage` | Path to your photo |
| `resumeUrl` | Path to your PDF resume |
| `about` | Your bio paragraphs |
| `careerGoal` | Your goal statement |
| `skills[]` | Add/remove skills, adjust `level` (0–100) |
| `projects[]` | Update `liveUrl`, `repoUrl`, `description`, `tech` |
| `timeline[]` | Update your learning journey milestones |

---

### 2. Add Your Profile Photo

1. Copy your photo into `public/images/` and name it `profile.jpg`  
   (or use any name and update `profileImage` in `portfolioData.js`)

### 3. Add Your Resume

1. Copy your PDF into `public/` and name it `Leela_Resume.pdf`  
   (or use any name and update `resumeUrl` in `portfolioData.js`)

### 4. Add Project Screenshots (Optional)

Copy project screenshots into `public/images/`:
- `ecommerce.png`
- `todo.png`
- `youtube.png`
- `weather.png`

If images are missing, the project cards show a colourful emoji placeholder automatically.

---

## 📧 Enable Email on Contact Form

In `src/components/Contact.jsx`, find the `handleSubmit` function and replace the demo code with one of:

### Option A — Formspree (Easiest, Free)
1. Go to [formspree.io](https://formspree.io), create a free form, get your form ID
2. Replace the fetch URL:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
if (res.ok) setStatus('success'); else setStatus('error');
```

### Option B — EmailJS (Free, No Backend)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Follow their React integration guide

---

## 🌐 Deploy to Vercel (Free)

```bash
# 1. Push your project to GitHub

# 2. Go to vercel.com → New Project → Import your repo

# 3. Vercel auto-detects Vite — just click Deploy!
```

Or deploy with Netlify:
```bash
npm run build
# Drag and drop the /dist folder to app.netlify.com/drop
```

---

## 🎨 Colour Theme

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#6366f1` (Indigo) | Buttons, accents, borders |
| Accent | `#22d3ee` (Cyan) | Glow effects, gradient ends |
| Purple | `#a855f7` | Blob backgrounds |
| Dark BG | `#070714` | Loader, darkest bg |

To change the theme, update the gradient values in `src/index.css` and `tailwind.config.js`.

---

## ✅ Features Checklist

- [x] Loading animation
- [x] Dark / Light mode toggle (persisted)
- [x] Sticky responsive navbar
- [x] Animated hero with profile image
- [x] Resume download button
- [x] Social media links
- [x] About section with animated cards
- [x] Skills with animated progress bars
- [x] Project cards with live/GitHub links
- [x] Learning journey timeline
- [x] Contact form (email integration ready)
- [x] Framer Motion scroll reveal animations
- [x] Glassmorphism design
- [x] SEO meta tags
- [x] Responsive (mobile, tablet, desktop)
- [x] Back to top button

---

Built with ❤️ for Leela Chouhan
