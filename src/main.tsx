import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/vesta-k">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
