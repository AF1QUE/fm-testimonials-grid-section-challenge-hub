module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      violet: "hsl(263, 55%, 52%)",
      grayishBlue: "hsl(217, 19%, 35%)",
      blackishBlue: "hsl(219, 29%, 14%)",
      white: "hsl(0, 0%, 100%)",
      lightGray: "hsl(0, 0%, 81%)",
      lightGrayishBlue: "hsl(210, 46%, 95%)",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
