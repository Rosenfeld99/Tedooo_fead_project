/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#f6f6f6",
      secondary: "#ffffff",
      neutral: "#949796",
      accent: "#f4f5f5",
      shadow: "#282F2D12",
      border: "#e9eaea",
      btnAction: "#494e4c",
      textActive: "#2c68be",
      textError: "#e64a19",
      skeleton : "#e9e8e8"
    },
  },
  plugins: [],
};
