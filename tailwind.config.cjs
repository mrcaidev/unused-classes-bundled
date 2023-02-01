const plugin = require("tailwindcss/plugin");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".bg-custom": {
          backgroundColor: "#f9fafb",
          ".dark &": {
            backgroundColor: "#111827",
          },
        },
      });
    }),
  ],
};
