const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
    "content/**/*.mdx",
  ],

  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        image: "image 3.7s ease-in-out forwards",
        shadow: "image 4s 4s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            opacity: "0%",
          },
          "70%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        image: {
          "0%": {
            opacity: "0",
            transform: "rotate(0deg)",
          },
          "85%": {
            opacity: "0",
            transform: "rotate(0deg) scale(1)",
            filter: "blur(5px)",
          },
          "90%": {
            opacity: "100%",
            transform: "rotate(180deg) scale(2)",
            filter: "blur(5px)",
          },
          "100%": {
            transform: "rotate(360deg) scale(1)",
            filter: "blur(0)",
          },
        },
        shadow: {
          "0%": {
            boxShadow: "0 0 25px 10px rgba(0,145,255, 0)",
          },
          "20%": { boxShadow: "0 0 25px 10px rgba(0,145,255, .8)" },
          "40%": { boxShadow: "0 0 25px 10px rgba(0,145,255, .5)" },
          "60%": { boxShadow: "0 0 25px 10px rgba(0,145,255, 1)" },
          "80%": { boxShadow: "0 0 25px 10px rgba(0,145,255, 0.8)" },
          "100%": { boxShadow: "0 0 25px 10px rgba(0,145,255, 1)" },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
  ],
};
