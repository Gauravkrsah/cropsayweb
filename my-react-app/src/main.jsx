import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export const scrollTop = createContext({ scrollTop: false });

const AppWrapper = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  return (
    <scrollTop.Provider
      value={{
        showScrollTop,
        setShowScrollTop,
      }}
    >
      <App />
    </scrollTop.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
    <ToastContainer />
  </StrictMode>,
);
