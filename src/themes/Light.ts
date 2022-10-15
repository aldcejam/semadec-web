import {createTheme} from "@mui/material/styles";


export const LightTheme = (mainColor: string, secondaryColor:string) => {
  
  return createTheme({
    palette: {
      common:{
        black: "#000000",
        white: "#ffffff"
      },
      primary: {
        main: mainColor,
        contrastText: "#363636",
        light: "#D8D8D8",
        dark: '#000000'
      },
      secondary: {
        main: secondaryColor,
        dark: '#ffffff'
      },
      info:{
        main: "#00D1FF"
      },
      success:{
        main: "#53ED62"
      },
      grey: {
        "600": "#BCBCBC",
        "900": "#D6D6D6",
      },
      text: {
        /* title */
        primary: "#2D2D2D",
        /* Subtitle */
        secondary: "#353535",
      },
      action: {
        active: "#000",
        disabled: "#fff",
      },
      background: {
        paper: "#d9d9d9",
        default: "linear-gradient(135deg, #5B6ABD 0%, #D943B8 100%)",
      },
    },
    shape:{
      borderRadius: "15px"
    },
    breakpoints: {
      values: {
        xs: 450,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    shadows: [
      "none",
      "inset 3px 3px 3px #ededed, inset -3px -3px 3px #c6c6c6",
      "inset 3px 3px 3px #c6c6c6, inset -3px -3px 3px #c6c6c6",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
    ],
  });
};
