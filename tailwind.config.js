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
      white: "#ffffff",
      gray100: "#767676",
      mainbg: "#F1F1F1",
      borderColor: "#DDDDDD",
    },
    boxShadow: {
      mainshadow: "0px 4px 12px 2px rgba(81, 81, 81, 0.16)",
      // smallshadow: "0px 4px 12px 2px rgba(81, 81, 81, 0.16)",
      // lgshadow: "0px 44px 44px rgba(35, 37, 55, 0.2)",
      // mdshadow: "23px 27px 0px rgba(0, 17, 141, 0.1)",
      // smshadow: "0 10px 7px -3px rgb(0, 0, 0 ,0.1), 0 4px 6px 7px rgb(0, 0, 0 , 0.1)",
      // xsmshadow: "5px 0px 0px rgba(0, 17, 141, 0.2)",
      // xsshadow: "6px 9px 0px rgba(0, 17, 141, 0.1)",
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
