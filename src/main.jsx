import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// owl carousel
import * as $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
