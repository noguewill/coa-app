module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.ts", "./src/**/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "098": "98%",
        "35rem": "35rem",
      },
      colors: {
        "augusta-blue": "#5AD0E8",
        "augusta-white": "#F4EFDB",
        "augusta-red": "#FF424E",
        "augusta-brown": "#664C52",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        beat: "beat 1s ease-out infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
        rollRight: "rollRight 1s forwards",
      },
      keyframes: {
        rollRight: {
          "0%": { opacity: "0" },
          "100%": { transform: "translate(10%)" },
        },
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.15)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
    },
  },
  variants: {
    extend: {
      visibility: ["hover", "focus"],
    },
  },
  plugins: [],
};
