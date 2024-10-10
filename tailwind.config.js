/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/2c925842-f46a-4310-9103-16c3ab898baa/CA-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        "black-transparent":
          "linear-gradient(to right bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))",
      },
    },
  },
  plugins: [],
};
