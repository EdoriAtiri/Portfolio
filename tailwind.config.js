module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        machine: "url('/src/app/data/digital-buggu.jpg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
