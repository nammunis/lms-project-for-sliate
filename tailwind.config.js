/** @type {import('tailwindcss').Config} */
export default {
  // --- CORRECTED CONTENT ARRAY ---
  // This tells Tailwind to look for class names in ALL files
  // that have the extensions .html, .js, .jsx, .ts, .tsx, .vue, .svelte:
  content: [
    // 1. Looks inside the 'src' folder (covering components, pages, context, etc.)
    "./src/**/*.{html,js,jsx,ts,tsx,vue,svelte}",
    // 2. Looks at files in the project root (like index.html and App.jsx)
    "./*.{html,js,jsx,ts,tsx,vue,svelte}",
  ],
  // -------------------------------
  theme: {
    extend: {
      fontSize: {
        'course-details-heading-small': ['26px', '36px'],
        'course-details-heading-large': ['36px', '44px'],
        'home-heading-small': ['28px', '44px'],
        'home-heading-large': ['48px', '56px'],
        default: ['15px', '21px']
      },
      gridTemplateColumns: {
        // Defines a responsive grid column utility: e.g., 'grid-cols-auto'
        auto: 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      spacing:{
        // Defines a custom spacing utility: e.g., 'h-section-height'
        'section-height': '500px',
      },
      maxWidth:{
        'course-card': '424px'
      },
      boxShadow:{
        'custom-card': '0px 4px 15px 2px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
};