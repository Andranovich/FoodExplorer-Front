import theme from "./styles/theme";
import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global";
import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";
import { ThemeProvider } from "styled-components";
import "swiper/css/bundle";
// import "swiper/css/navigation";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
