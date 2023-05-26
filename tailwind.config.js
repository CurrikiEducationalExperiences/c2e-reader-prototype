/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primarycolor: "#084892",
      primarycolor2: "#2E68BF",
      blueHighlight: "#F7FAFF",
      white: "#ffffff",
      gray100: "#767676",
      mainbg: "#F1F1F1",
      borderColor: "#DDDDDD",
      borderGray: "#CCCCCC",
      black: "#000000",
      yellowColor: "#F8AF2C",
      bgGrey: "#FAFAFA",
    },
    boxShadow: {
      mainshadow: "0px 4px 12px 2px rgba(81, 81, 81, 0.16)",
      smallshadow: "2px 2px 5px rgba(116, 116, 116, 0.25",
      mdshadow: "0px -2px 4px rgba(0, 0, 0, 0.25), 3px 4px 7px rgba(0, 0, 0, 0.25)",
    },
    backgroundImage: {
      blueGradient: "linear-gradient(180deg, rgba(81, 81, 81, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)",
    },
    fontFamily: {
      OpenSans: "Open Sans, sans-serif",
      Rubik: "Rubik, sans-serif",
    },
    screens: {
      sm: "499px",
      md: "768px",
      // => @media (min-width: 640px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      laptop: "1190px",

      xl: "1315px",

      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
