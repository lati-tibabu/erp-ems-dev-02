import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "flexifycss";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/file_selector_btn.css";
import "./index.css";

const AppWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  });

  if (isMobile) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#202020",
          color: "#fff",
          width: "100%",
          height: "100vh",
        }}
      >
        <div>
          <img src="/school-stream-logo6.png" alt="" width={100} />
        </div>
        <h2>Mobile Version Under Development</h2>
        <p>
          Please use a desktop browser to access the SchoolStream app for the
          best experience.
        </p>
        <div>
          <img src="/mobile-development.svg" alt="" width={150} />
        </div>
      </div>
    );
  }
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <div>Hello</div> */}

    <AppWrapper />
  </React.StrictMode>
);
