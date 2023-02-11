module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        white_A700_33: "#ffffff33",
        deep_purple_900_30: "#2b17b030",
        indigo_900: "#3c2a6d",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        gray_300: "#e2e1e5",
        deep_purple_900_b2: "#2b17b0b2",
        deep_purple_900_7f: "#2b17b07f",
        deep_purple_900_c1: "#2b17b0c1",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      borderRadius: {
        radius15: "15px",
        radius19: "19px",
        radius20: "20px",
        radius50: "50%",
      },
      fontFamily: {
        sfprodisplay: "SF Pro Display",
        sfpro: "SF Pro",
        sfprotext: "SF Pro Text",
        sfprorounded: "SF Pro Rounded",
        anekgujarati: "Anek Gujarati",
      },
      fontWeight: { fw: 590 },
    },
  },
};
