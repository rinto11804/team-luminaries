export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://wallpapers.com/images/hd/planet-in-a-colorful-outer-space-1e4f2o2mmscz9h1b.webp')",
      },
      fontFamily: {
        'Nitalics': ["Nitalics"],
        'Nregular': ["Nregular"],
        'Nmedium': ["Nmedium"],
        'Nregular': ["Nregular"],
        'Pbold': ["Pbold"],
        'Psemi': ["Psemi"]
      },
    },
  },
  plugins: [],
}
