# Platinum Spa - React Application

A modern, responsive spa website built with React, TypeScript, and Tailwind CSS. This application showcases a luxury spa business with beautiful animations, interactive components, and a professional design.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Interactive Components**: Booking modal, contact forms, and service showcases
- **Professional UI/UX**: Clean, luxury-focused design for spa business
- **Performance Optimized**: Fast loading with Vite build tool

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Package Manager**: npm

## 📁 Project Structure

```
spa_react/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with mobile menu
│   │   ├── Hero.tsx            # Hero section with call-to-action
│   │   ├── About.tsx           # About section with features
│   │   ├── Services.tsx        # Services showcase grid
│   │   ├── Testimonials.tsx    # Customer reviews and ratings
│   │   ├── Contact.tsx         # Contact form and information
│   │   ├── Footer.tsx          # Footer with links and newsletter
│   │   └── BookingModal.tsx    # Multi-step booking form
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles and Tailwind imports
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite build configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spa_react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors and Theme

The application uses a purple-pink gradient theme. You can customize colors in:

- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Custom CSS variables and component classes

### Content

Update the content in each component file:
- Service descriptions in `Services.tsx`
- Company information in `About.tsx`
- Contact details in `Contact.tsx` and `Footer.tsx`
- Testimonials in `Testimonials.tsx`

### Images

Replace placeholder images with your own:
- Update image URLs in component files
- Place images in the `public/` directory
- Update image paths accordingly

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

Framer Motion animations include:
- Fade-in effects on scroll
- Hover animations on interactive elements
- Smooth transitions between modal steps
- Staggered animations for lists and grids

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Consistent naming conventions
- Component-based architecture

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify

### Other Platforms

The built files in the `dist/` directory can be deployed to any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: info@platinumspa.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
