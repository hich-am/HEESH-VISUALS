# Heesh Visuals 🎨

A premium, high-density React SPA portfolio designed for an editorial, minimalist aesthetic. It features smooth scrolling, tailored animations, and a responsive modular grid layout.

## ✨ Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite.
- **Styling**: Tailored, responsive layout using Tailwind CSS with custom global CSS tokens for consistent theming.
- **Micro-Animations**: Uses `framer-motion` for smooth, staggered page transitions and hover effects.
- **Multi-Route Navigation**: Seamless client-side routing managed by `react-router-dom`, featuring a sticky contextual sidebar.
- **High-Density Layout**: An "editorial" aesthetic featuring very tight margins, tiny minimalist typography, and a 3-column masonry/modular portfolio grid.
- **Design Tokens**: A robust `--color-accent` `#0E7586` design token system built using CSS variables to handle opacity modifiers consistently across the application.

## 🚀 Getting Started

### Prerequisites

You need Node.js and npm (or yarn/pnpm) installed.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd HEESH-VISUALS
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## 🛠️ Tech Stack & Dependencies

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Routing**: `react-router-dom`
- **Animations**: `framer-motion`
- **Scrolling**: `react-scroll`
- **Icons**: `lucide-react`, `react-icons`

## 📁 Project Structure

```
src/
├── components/    # Reusable UI components (Sidebar, Footer, Layout)
├── pages/         # Top-level page components (Home, Portfolio, About, Services, Process, Contact)
├── App.tsx        # Main application component & routing schema
├── index.css      # Global CSS variables and Tailwind layer styles
└── main.tsx       # Application entry point
```

## 🎨 Token System

The project's brand color is centralized into a robust Tailwind CSS opacity-supporting token system.
The master teal is defined in `src/index.css`:
```css
:root {
  --color-accent: 14 117 134; /* #0E7586 */
}
```

## 📝 License

This project is proprietary. All content and visual assets belong to Heesh Visuals.
