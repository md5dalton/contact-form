/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-lighter": "hsl(148, 38%, 91%)",
        "green-medium": "hsl(169, 82%, 27%)",
        "red": "hsl(0, 66%, 54%)",
        "grey-medium": "hsl(186, 15%, 59%)",
        "grey-darker": "hsl(187, 24%, 22%)",
      },
      fontSize: {
        "s": ["16px", {
          lineHeight: "150%",
          fontWeight: "400"
        }],
        "m": ["18px", {
          lineHeight: "150%",
          fontWeight: "400"
        }],
        "m-b": ["18px", {
          lineHeight: "150%",
          fontWeight: "700"
        }],
        "hd": ["32px", {
          lineHeight: "100%",
          fontWeight: "700"
        }],
      }
    },
  },
  plugins: [],
};
