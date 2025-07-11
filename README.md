# Portfolio V2 - Modern Design

A modern, sleek portfolio website built with Next.js 14, featuring smooth animations with Framer Motion and a contemporary design.

## ✨ Features

- **Modern Design**: Clean, minimalist interface with a dark theme
- **Professional Animation System**: Optimized Framer Motion with SSR support using LazyMotion
- **Advanced Background Effects**: Interactive gradient animations with mouse tracking
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Server-Side Rendering**: Proper SSR/SSG support with Next.js 14 best practices
- **Performance Optimized**: Lazy-loaded animations and optimized bundle splitting
- **SEO Enhanced**: Comprehensive metadata, manifest, sitemap, and structured data
- **Version Switcher**: Easy navigation between V1 and V2 versions
- **Interactive Elements**: Smooth hover effects, transitions, and micro-interactions
- **Contact Form**: Integrated with EmailJS for seamless communication

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations and responsive design
- **Animations**: Framer Motion with LazyMotion for SSR optimization
- **Typography**: JetBrains Mono for developer-friendly aesthetics
- **Icons**: React Icons with custom SVG optimizations
- **Forms**: EmailJS integration with React Hook Form validation
- **Notifications**: React Hot Toast with custom styling
- **Scroll Detection**: React Intersection Observer for performance
- **SEO**: Built-in Next.js metadata API with structured data
- **Language**: TypeScript with strict type checking

## 🎨 Design Philosophy

This V2 version embraces a modern, sophisticated aesthetic with:

- **Professional Dark Theme**: Carefully crafted color palette with semantic color system
- **Advanced Animation System**: Hardware-accelerated animations with SSR support
- **Developer-Centric Typography**: JetBrains Mono for authentic developer aesthetic
- **Responsive Grid System**: CSS Grid and Flexbox for complex layouts
- **Interactive Background**: Dynamic gradient animations that respond to user interaction
- **Micro-Interactions**: Subtle hover states and gesture feedback
- **Performance-First**: Optimized for Core Web Vitals and accessibility

## 📱 Pages

- **Home**: Hero section with animated introduction and skills overview
- **About**: Detailed background, skills, and experience
- **Projects**: Showcase of featured projects with descriptions and links
- **Contact**: Contact form and social media links

## 🔧 Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file with your EmailJS credentials:

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Run Development Server**:

   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 🏗️ Architecture

### Animation System

- **LazyMotion**: Reduces bundle size by loading only necessary animation features
- **SSR-Safe**: Proper hydration handling with `NoSSR` wrapper components
- **Performance Optimized**: Hardware acceleration and reduced layout thrashing

### Component Structure

```
components/
├── layout/           # Layout components (Navbar, Footer)
├── ui/              # Reusable UI components
├── home/            # Home page specific components
├── about/           # About page specific components
├── projects/        # Projects page specific components
├── contact/         # Contact page specific components
└── animations/      # Animation components and utilities
```

### State Management

- **Server Components**: Used for static content and SEO optimization
- **Client Components**: Used only when interactivity is required
- **React Hooks**: Local state management for forms and UI state

## 🌟 Key Improvements from V1

- **Enhanced Visual Design**: Modern gradient system with interactive background animations
- **Professional Animation System**: Framer Motion with LazyMotion for SSR optimization
- **Improved Performance**: Code splitting, lazy loading, and optimized bundle size
- **Better SEO**: Comprehensive metadata, sitemap, manifest, and structured data
- **Accessibility**: WCAG 2.1 compliant with proper focus management
- **Developer Experience**: TypeScript strict mode, ESLint, and Prettier configuration
- **Mobile-First Design**: Touch-friendly interactions and responsive typography
- **Advanced Architecture**: Server components, client components separation, and proper SSR patterns

## 🚀 Deployment

This portfolio is designed to be deployed on modern platforms like:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (with static export)

## 📞 Contact

For any questions or collaborations, feel free to reach out:

- **Email**: hi@ahammadabdullah.dev
- **LinkedIn**: [ahammad-abdullah](https://www.linkedin.com/in/ahammad-abdullah/)
- **GitHub**: [ahammadabdullah](https://github.com/ahammadabdullah)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

_Built with ❤️ by Ahammad Abdullah_
