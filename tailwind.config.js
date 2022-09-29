module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_51: "#fafcff",
        bluegray_50: "#eaecf0",
        gray_53: "#fcfcfc",
        black_900: "#000000",
        black_900_0c: "#0000000c",
        gray_200: "#efefef",
        gray_300: "#e0e0e0",
        blue_50: "#e0ebff",
        white_A700: "#ffffff",
        bluegray_200: "#bac1ce",
        black_900_b2: "#000000b2",
        black_900_3f: "#0000003f",
        light_blue_100: "#b0e5fc",
        green_A100: "#b5eacd",
        gray_50: "#f9fbff",
        blue_A700: "#0a58ff",
        blue_A701: "#0061ff",
        colors: "#0061ffff",
        bluegray_100: "#d6dae2",
        white_A700_66: "#ffffff66",
        blue_200: "#a6c8ff",
        gray_52: "#f8f9fa",
        bluegray_300: "#9ea8ba",
        red_200: "#fa9a9a",
        green_601: "#1ea84d",
        colors5: "#1ea84dff",
        colors4: "#2c2b2bff",
        amber_500: "#feb909",
        bluegray_100_6c: "#d1d3d46c",
        gray_900: "#0d1624",
        red_700: "#d03329",
        bluegray_701: "#424c5d",
        gray_900_a5: "#070b2ea5",
        black_901: "#130e00",
        colors1: "#130e00ff",
        bluegray_900: "#262b35",
        bluegray_800: "#37334d",
        bluegray_400: "#74839d",
        colors2: "#74839dff",
        bluegray_401: "#75839d",
        green_600: "#349765",
        bluegray_700: "#535763",
        gray_700: "#666666",
        colors3: "#666666ff",
        colors6: "#858082ff",
        gray_700_11: "#55555511",
      },
      borderRadius: {
        radius1: "1px",
        radius3: "3px",
        radius4: "4px",
        radius6: "6px",
        radius8: "8px",
        radius12: "12px",
        radius16: "16px",
        radius20: "20px",
        radius45: "4.5px",
        radius50: "50%",
        radius61: "6.1px",
        radius868: "8.68px",
        radius1714: "17.14px",
        radius11955: "11.955px",
      },
      backgroundImage: {
        gradient: "linear-gradient(135.84668deg ,#ffffff,#ffffff66)",
      },
      boxShadow: {
        bs1: "0px 4px  8px -4px #0000003f",
        bs: "0px 0px  10px 4px #55555511",
        bs2: "0px 4px  10px 4px #0000000c",
      },
      fontFamily: {
        gilroy: "Gilroy",
        opensans: "Open Sans",
        chivo: "Chivo",
        inter: "Inter",
        urbanist: "Urbanist",
        lato: "Lato",
      },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
