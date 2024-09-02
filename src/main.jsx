import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// owl carousel
import * as $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/textfield.css";
import "./styles/index.css";
import "./styles/responsive.css";
import "./styles/animation.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init(); // Initialize AOS

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
