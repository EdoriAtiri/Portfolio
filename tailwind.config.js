module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        machine: "url('/src/app/data/digital-buggu.jpg)",
      },
      transitionProperty: {
        outline: "outline",
        scale: "scale",
      },
    },
  },
  plugins: [require("daisyui")],
};
