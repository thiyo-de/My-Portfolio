# Thiyoplus F - Professional Portfolio

<div align="center">
  <img src="public/og-image.png" alt="Thiyoplus F Portfolio" width="100%" />
  
  <h3>A High-Performance, Interactive Portfolio Website</h3>
  
  <p>
    <a href="https://thiyoplus-f.netlify.app/"><strong>View Live Site »</strong></a>
    <br />
    <br />
    <a href="#features">Features</a>
    ·
    <a href="#tech-stack">Tech Stack</a>
    ·
    <a href="#getting-started">Getting Started</a>
  </p>
</div>

## 🚀 Overview

**Thiyoplus F** is a modern, responsive portfolio website designed to showcase professional projects with an immersive user experience. Built with high-performance metrics in mind, it features smooth animations, lazy loading, and a seamless navigation flow. Each project detail page is crafted to provide deep insights into technical architectures, core features, and live demonstrations.

## ✨ Features

- **🎨 Modern Design**: Sleek, glassmorphism-inspired UI with a polished dark mode aesthetic.
- **⚡ High Performance**: Optimized with lazy loading, code splitting, and responsive assets.
- **📱 Fully Responsive**: Flawless experience across mobile, tablet, and desktop devices.
- **🏃‍♂️ Low Latency Animations**: Powered by **Framer Motion** for butter-smooth transitions.
- **📂 Downloadable Resources**: Direct access to project source codes via responsive "Download Package" sections.
- **🔍 SEO Optimized**: Semantic HTML and metadata for better search engine visibility.
- **🧩 Component-Based Architecture**: Modular and reusable components ensuring maintainability.

## 🛠️ Tech Stack

This project is built using the latest web technologies to ensure scalability and performance:

- **Frontend Framework**: [React](https://reactjs.org/) (v18)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) - Super fast HMR and build optimization.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/) - Accessible, unstyled primitives.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library.
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icon pack.
- **Deployment**: [Netlify](https://www.netlify.com/)

## 🏗️ Project Structure

A quick look at the top-level directory structure:

```
src/
├── components/        # Shared UI components (Portfolio, Header, etc.)
│   ├── ui/           # Radix/Shadcn primitives (Buttons, Cards, Dialogs)
├── hooks/            # Custom React hooks (use-toast, use-mobile)
├── lib/              # Utilities (utils.ts)
├── pages/            # Page Views
│   ├── Slugs/        # Dynamic Project Detail Pages (ProjectDetails_1 to 9)
│   ├── Index.tsx     # Home Page
├── App.tsx           # Main Application Entry & Routing
└── main.tsx          # DOM Mounting
```

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/thiyo-de/My-Portfolio.git
    cd My-Portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in browser**
    Navigate to `http://localhost:8080` (or the port shown in your terminal).

## 📦 Deployment

This project is optimized for deployment on platforms like Netlify, Vercel, or GitHub Pages.

To build for production:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized production build.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

**Thiyow** - [Portfolio](https://thiyoplus-f.netlify.app/)

Project Link: [https://github.com/thiyo-de/My-Portfolio](https://github.com/thiyo-de/My-Portfolio)
