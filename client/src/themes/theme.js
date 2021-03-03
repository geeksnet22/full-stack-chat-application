import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 12,
    h2: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.5rem",
      color: "#FFFFFF",
    },
    h4: {
      fontSize: "1.5rem",
      color: "gray",
    },
    h5: {
      fontSize: "1rem",
    },
    body1: {
      fontSize: "0.8rem",
      color: "gray",
    },
    body2: {
      fontSize: "0.8rem",
      color: "#FFFFFF",
    },
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: { main: "#3a8dff", contrastText: "#FFFFFF" },
    secondary: { main: "#FFFFFF", contrastText: "#3a8dff" },
  },
  overrides: {
    MuiButton: {
      root: {
        margin: "20px",
        padding: "10px 40px",
        alignSelf: "center",
      },
    },
  },
});
