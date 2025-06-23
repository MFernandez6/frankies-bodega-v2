# Frankie's Bodega 🐕

A modern, sophisticated e-commerce website for Frankie's Bodega - an online neighborhood convenience store with a golden retriever theme. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with golden retriever themes
- **Smooth Animations**: Framer Motion powered animations for engaging user experience
- **Mobile-First**: Fully responsive design that works on all devices
- **TypeScript**: Full type safety throughout the application
- **Component Library**: Built with shadcn/ui for consistent, accessible components
- **Performance Optimized**: Next.js App Router for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 🎨 Design Features

- **Golden Retriever Theme**: Warm amber and orange color palette
- **Sophisticated Animations**: Floating elements, wagging animations, and smooth transitions
- **Modern UI**: Clean, professional design with excellent UX
- **Accessibility**: WCAG compliant components and design

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd frankies-bodega
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── hero-section.tsx     # Hero section with animated elements
│   ├── features-section.tsx # Features showcase
│   ├── navigation.tsx       # Navigation bar
│   └── footer.tsx           # Footer component
└── lib/
    └── utils.ts             # Utility functions
```

## 🎯 Key Components

### Hero Section

- Animated background elements
- Golden retriever mascot (Frankie)
- Call-to-action buttons
- Floating product icons

### Features Section

- Six key features with animated icons
- Gradient backgrounds
- Hover effects and animations
- Bottom CTA section

### Navigation

- Fixed header with backdrop blur
- Mobile-responsive menu
- Shopping cart integration
- Smooth animations

### Footer

- Comprehensive link sections
- Social media integration
- Contact information
- Branded with Frankie's theme

## 🎨 Custom Animations

The site includes several custom CSS animations:

- `animate-float`: Gentle floating motion
- `animate-wag`: Tail-wagging animation
- `animate-sparkle`: Sparkling effect

## 🚀 Deployment

This project can be deployed to Vercel, Netlify, or any other Next.js-compatible hosting platform.

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Customization

### Colors

The color scheme is defined in `src/app/globals.css` using CSS custom properties. The main colors are:

- Primary: Amber/Orange gradient
- Background: Warm cream tones
- Accent: Various colors for different features

### Content

Update the content in each component file to match your business needs:

- `hero-section.tsx`: Main messaging and CTAs
- `features-section.tsx`: Your key features and benefits
- `navigation.tsx`: Menu items and branding
- `footer.tsx`: Contact info and links

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animation Customization

Framer Motion animations can be customized in each component. The animations include:

- Entrance animations (fade in, slide up)
- Hover effects (scale, rotate)
- Continuous animations (floating, wagging)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🐕 About Frankie

Frankie is a friendly golden retriever who runs the neighborhood bodega. The website captures his warm, welcoming personality while providing a modern, convenient shopping experience.

---

Built with ❤️ and lots of tail wags by Frankie's Bodega team.
