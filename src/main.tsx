import React from "react";
import ReactDOM from "react-dom/client";
import { DefaultTheme, ThemeProvider } from "styled-components";
import App from "./App";
import 'antd/dist/antd.css';
import "./index.css";

const theme: DefaultTheme = {
  tomato: {
    primaryColor: "tomato",
    font: '"Times New Roman", sans-serif',
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
