import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      keyframes: {
        bubble: {
          "0%, 80%, 100%": { transform: "scale(0.6)", opacity: "0.3" },
          "40%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        bubble: "bubble 1.2s infinite ease-in-out",
      },
    },
  },
} satisfies Config;
