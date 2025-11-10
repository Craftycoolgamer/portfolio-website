# Portfolio Website

A modern, responsive single-page portfolio website built with React.js and Vite. Features smooth scrolling navigation, a grey and blue color theme, and sections for About, Experience, Projects, and Contact.

## Features

- **Single Page Application** - Smooth scrolling navigation between sections
- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI** - Clean design with grey and blue color theme
- **Smooth Animations** - Hover effects and transitions throughout
- **Contact Form** - Form validation and submission handling

## Sections

- **Hero** - Introduction and call-to-action
- **About** - Personal introduction and skills
- **Experience** - Work experience timeline
- **Projects** - Portfolio projects showcase
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Customization

### Updating Content

- Edit component files in `src/components/` to update section content
- Modify the color theme in `src/App.css` by changing CSS custom properties
- Update personal information in each component file

### Color Theme

The color theme is defined in `src/App.css` using CSS custom properties:
- `--blue-primary`: Primary blue color
- `--blue-secondary`: Secondary blue color
- `--grey-*`: Various grey shades
- `--bg-primary`: Background color
- `--text-primary`: Primary text color
- `--accent`: Accent color (blue)

## Project Structure

```
portfolio-website/
├── public/          # Static assets
├── src/
│   ├── components/ # React components
│   ├── App.jsx     # Main app component
│   ├── App.css     # Global styles and theme
│   ├── main.jsx    # React entry point
│   └── index.css   # Base CSS reset
├── index.html      # HTML entry point
├── package.json    # Dependencies
└── vite.config.js  # Vite configuration
```

## Technologies Used

- React 18
- Vite
- CSS Modules
- Modern JavaScript (ES6+)

## License

See LICENSE file for details.