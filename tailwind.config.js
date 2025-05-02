// tailwind.config.js
module.exports = {
  mode: "jit", // Just-In-Time mode enabled
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your source files to scan for classes
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Rebellion", "sans-serif"],
      },
    },
  },
  plugins: [],
};
