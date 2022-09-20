import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/app-context";
import { AppThemeProvider } from "./context/app-theme-provider";

import "antd/dist/antd.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
