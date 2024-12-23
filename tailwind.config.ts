import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d2c2c",
        primaryDark: "#237fe2",
        primaryLight: "#585858",
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config
