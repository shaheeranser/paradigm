/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#16172b',
        'deep-purple': '#2d1b4e',
        'cyber-purple': '#a78bfa',
        'cyber-cyan': '#06b6d4'
      },
      backgroundImage: {
        'gradient-radial-dark': "radial-gradient(circle at top right, #2d1b4e, #0f0f23)",
        'gradient-primary': 'linear-gradient(90deg, #a78bfa 0%, #c084fc 100%)',
        'gradient-button': 'linear-gradient(135deg, #7c3aed 0%, #c084fc 50%, #06b6d4 100%)'
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(167, 139, 250, 0.4)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
        'card-hover': '0 10px 40px rgba(167, 139, 250, 0.2)'
      }
    }
  },
  plugins: []
};
