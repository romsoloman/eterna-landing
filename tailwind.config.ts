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
        primary: "#278eff",
        primaryDark: "#237fe2",
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
