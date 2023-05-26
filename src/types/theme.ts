import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins"
    ].join(','),
  },
  palette: {
    background: {
      default: "#0F0F0F",
    },
    primary: {
      main: "#FFAB00",
      dark: "#E09600",
      light: "#FFC247",
      contrastText: "#E6E6E6",
    },
    secondary: {
      main: "#0F0F0F",
      dark: "#000000",
      light: "#1F1F1F",
      contrastText: "#E6E6E6",
    }
  }
});