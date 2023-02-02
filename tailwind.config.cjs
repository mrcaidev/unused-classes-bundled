const plugin = require("tailwindcss/plugin");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class", // The bug only exists when this is set to "class".
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".bg-custom": {
          backgroundColor: "#f9fafb",
          ".dark &": {
            // This class is always bundled, even if never used.
            backgroundColor: "#111827",
          },
        },
      });
    }),
  ],
};
