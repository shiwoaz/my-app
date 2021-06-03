module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        chat: "url(https://ftp.bmp.ovh/imgs/2021/05/4e1e0aa8d00d0cc7.jpeg)",
      }),
      strokeWidth: {
        3: "3",
        4: "4",
      },
    },
    minWidth: {
      "1/4": "25%",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      chatRoom: "#202541",
      roomBgC: "#848aae",
      create: "#626262"
    }),
    variants: {
      extend: {
        opacity: ["active"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
