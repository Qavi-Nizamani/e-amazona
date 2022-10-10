/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)',
        'th-primary-border': 'var(--primary-border)',
        'th-primary-header': 'var(--primary-header)',
        'th-primary-btn': 'var(--primary-btn)',
        'th-primary-btn-hover': 'var(--primary-btn-hover)',
        'th-primary-btn-active': 'var(--primary-btn-active)',
        'th-primary-badge': 'var(--primary-badge)',
        'th-primary-link': 'var(--primary-link)',
        'th-primary-link-hover': 'var(--primary-link-hover)',
        'th-primary-link-active': 'var(--primary-link-active)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
