import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App.jsx";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: { main: "#123c69" },
    secondary: { main: "#087ce5" }
  },
  typography: { fontFamily: "Arial, sans-serif" },
  shape: { borderRadius: 12 }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);