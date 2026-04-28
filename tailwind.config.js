/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          dark: "#0b0b14",
          neon: "#ff4fd8",
          cyan: "#22d3ee",
          glass: "rgba(255, 255, 255, 0.05)",
          vicePink: "#ff2d9b",
          viceBlue: "#36d1ff",
          vicePurple: "#7c3aed",
        },
        boxShadow: {
          neon: "0 0 20px rgba(255, 79, 216, 0.35)",
          neonLg: "0 0 35px rgba(255, 79, 216, 0.45)",
          cyanGlow: "0 0 25px rgba(54, 209, 255, 0.35)",
        },
        backdropBlur: {
          xs: "2px",
        },
        backgroundImage: {
          "vice-gradient":
            "linear-gradient(135deg, rgba(255,45,155,0.18) 0%, rgba(124,58,237,0.12) 50%, rgba(54,209,255,0.18) 100%)",
          "dark-radial":
            "radial-gradient(circle at top left, rgba(255,45,155,0.12), transparent 35%), radial-gradient(circle at top right, rgba(54,209,255,0.12), transparent 35%), linear-gradient(to bottom right, #0b0b14, #111827)",
        },
        borderRadius: {
          xl2: "1rem",
        },
        fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"],
          display: ["Orbitron", "Inter", "sans-serif"],
        },
        letterSpacing: {
          neon: "0.2em",
        },
        animation: {
          glow: "glow 2s ease-in-out infinite alternate",
          float: "float 4s ease-in-out infinite",
        },
        keyframes: {
          glow: {
            "0%": {
              boxShadow: "0 0 10px rgba(255, 79, 216, 0.25)",
            },
            "100%": {
              boxShadow: "0 0 25px rgba(255, 79, 216, 0.5)",
            },
          },
          float: {
            "0%, 100%": {
              transform: "translateY(0px)",
            },
            "50%": {
              transform: "translateY(-6px)",
            },
          },
        },
      },
    },
    plugins: [],
  };