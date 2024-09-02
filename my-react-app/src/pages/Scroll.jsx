import { useContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTop } from "../main";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { showScrollTop, setShowScrollTop } = useContext(scrollTop);
  useEffect(() => {
    // Instantly jump to the top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [showScrollTop, pathname]);

  return null;
};

export default ScrollToTop;
