import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      // once: true,
      mirror: true,
      offset: 120,
      disable: "phone",
      easing: "ease-out-cubic",
      duration: 700,
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
};

export default App;
