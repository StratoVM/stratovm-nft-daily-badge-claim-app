import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["700", "400"], subsets: ["latin"] });

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#F19938",
      contrastText: "#fff",
    },
    secondary: {
      main: "#12B981",
    },
    warning: {
      main: "#f7b40a",
    },
    text: {
      primary: "#ffffff",
      disabled: "#FFFFFFB2",
    },
    success: {
      main: "#12B981",
    },
    mode: "dark",
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: "100%",
          maxWidth: "450px",
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 16,
  },
});
