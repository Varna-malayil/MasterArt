# Artisan Gallery - React.js Version

A stunning art gallery website built with React.js, featuring Netflix-inspired design patterns and a sophisticated dark theme with purple accents.

## Features

- **Netflix-Inspired Design**: Hero sections, trending cards, and smooth animations
- **Staggered Masonry Layout**: Creative 3-column grid with offset middle columns
- **Auto-Sliding Carousel**: 5-second intervals with smooth transitions
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Theme**: Sophisticated black background with purple/violet accents
- **Interactive Elements**: Hover effects, glassmorphism, and smooth transitions

## Pages

- **Homepage**: Hero section, trending artworks, curator section, and category grid
- **Showcase**: Featured artworks with detailed cards
- **Contact**: Contact form with Google Maps integration
- **News**: Gallery news and announcements
- **Category Pages**: Dynamic pages for different art categories (Abstract, Landscapes, Portraits, Modern, Classical)

## Tech Stack

- **React.js 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icons
- **JavaScript**: No TypeScript dependencies

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd artisan-gallery-react
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and visit `http://localhost:5173`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/          # Reusable components
│   ├── ui/             # UI components (Button, Card, etc.)
│   ├── Navigation.jsx  # Main navigation
│   └── PageHeader.jsx  # Page header component
├── pages/              # Page components
│   ├── HomePage.jsx    # Main homepage
│   ├── ShowcasePage.jsx
│   ├── ContactPage.jsx
│   ├── NewsPage.jsx
│   └── CategoryPage.jsx
├── lib/                # Utility functions
│   └── utils.js        # Helper functions
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
\`\`\`

## Design Features

### Netflix-Inspired Elements
- Large hero sections with background content grids
- Numbered trending cards (1-5)
- Smooth hover animations and transitions
- Dark theme with excellent contrast

### Staggered Masonry Layout
- 3-column responsive grid
- Middle column offset (index 1 and 4) for visual interest
- Hover effects with scale and border animations

### Color Palette
- Primary: Black (#000000)
- Accent: Purple/Violet (#6b5b8b)
- Text: White (#ffffff)
- Secondary: Gray variants for depth

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
