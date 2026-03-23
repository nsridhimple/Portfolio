# Full Stack Developer Portfolio

A modern, professional full-stack developer portfolio website with a clean, minimal design and subtle gradient accents. The design is sophisticated and corporate-friendly, perfect for job applications.

## 🎨 Design Philosophy

- **Minimal & Clean**: Predominantly white and light backgrounds with generous whitespace
- **Corporate-Friendly**: Professional, trustworthy design suitable for Fortune 500 companies
- **Subtle Gradients**: Only used for buttons and small accent elements, not overwhelming backgrounds
- **Clean Borders**: Uses subtle borders instead of heavy shadows
- **Professional Animations**: Minimal, subtle animations that enhance without distracting

## 🚀 Features

- **Clean Design**: White/light backgrounds with minimal color usage
- **Fully Responsive**: Mobile-first design that works on all devices
- **Subtle Animations**: Powered by Framer Motion for professional user experience
- **TypeScript**: Fully typed for better development experience
- **Easy Content Management**: All content stored in a single data file for easy updates
- **Performance Optimized**: Built with Vite for fast builds and hot module replacement

## 🛠️ Tech Stack

- **React 18+** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for subtle animations
- **Lucide React** for icons
- **Vite** as build tool

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```
   Open **http://localhost:5180** (this repo uses **5180** by default so it does not clash with other apps on 5173).  
   For port 5173 instead: `npm run dev:5173`.

3. **If you see `vite: command not found`**  
   Dependencies are missing or broken. From this project folder run:
   ```bash
   rm -rf node_modules
   npm install
   npm run dev
   ```

4. **If you still see Splitify or the wrong app**  
   Make sure the URL is **http://localhost:5180/** (portfolio) — **not** `5173/login`.  
   Only this Portfolio folder should be running `npm run dev`.

5. Build for production:
```bash
npm run build
```
   - Use this for **Vercel**, **Netlify**, or any host at the **domain root** (`/`).

6. **GitHub Pages** (site URL: `https://<user>.github.io/Portfolio/`)

   **Option A — automatic (recommended)**  
   Push to `main`. The workflow `.github/workflows/deploy-github-pages.yml` builds with the correct base and deploys.  
   In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

   **Option B — manual `gh-pages` branch**
   ```bash
   npm run deploy
   ```
   (`predeploy` runs `build:github`, which uses `vite build --base /Portfolio/`.)

   **Blank page?** Almost always means the production build used `base: '/'` instead of `/Portfolio/`. Use Option A or B, or run `npm run preview:github` locally to verify.

7. Preview production build:
```bash
npm run preview
```

## 📝 Customization

All content is stored in `src/data/content.ts`. Simply update the data objects to customize:

- Personal information (name, title, contact info)
- Professional summary
- Work experience
- Technical skills
- Certifications and achievements
- Education
- Featured projects

## 🎨 Design System

### Color Palette
- **Backgrounds**: White (#ffffff) and light gray (#f8fafc, #f1f5f9)
- **Text**: Dark gray (#1e293b, #334155, #64748b)
- **Accent Gradient**: Subtle purple-blue (only for buttons/small accents)
  - From: #8b5cf6 (purple)
  - To: #3b82f6 (blue)
- **Borders**: Light gray (#e2e8f0)

### Typography
- **Font**: Inter or SF Pro Display or system-ui
- **Hero heading**: text-5xl md:text-6xl font-bold
- **Section headings**: text-3xl md:text-4xl font-semibold
- **Body**: text-base md:text-lg text-gray-600

### Styling Guidelines
- **Border radius**: rounded-lg (8px) for most elements, rounded-xl (12px) for larger cards
- **Shadows**: Subtle - shadow-sm and shadow-md
- **Padding**: Generous - p-6 md:p-8 for cards
- **Spacing**: py-16 md:py-20 for sections (lots of whitespace)
- **Borders**: Subtle borders (border border-gray-200)
- **Hover effects**: Minimal scale or shadow changes

## 📱 Sections

1. **Hero Section** - Clean introduction with contact card
2. **Professional Summary** - Overview of expertise in clean cards
3. **Experience** - Detailed work history with minimal styling
4. **Technical Skills** - Categorized skill sets with left border accents
5. **Certifications & Achievements** - Professional credentials
6. **Education** - Academic background
7. **Featured Projects** - Showcase of notable work
8. **Contact** - Get in touch section

## 🔧 Configuration

### Tailwind Config
Custom colors and minimal design system defined in `tailwind.config.js`:
- Extended gray color palette
- Custom font families (Inter, SF Pro Display)
- No heavy animations or effects

### Vite Config
Standard Vite configuration with React plugin in `vite.config.ts`.

## 📄 License

This project is open source and available for personal use.

## 🙏 Credits

Built with modern web technologies and best practices for performance and accessibility. Designed to be professional, clean, and corporate-friendly.
