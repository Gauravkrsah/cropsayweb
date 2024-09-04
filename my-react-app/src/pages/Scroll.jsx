import { useContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTop } from "../main";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { showScrollTop } = useContext(scrollTop);

  useEffect(() => {
    if (showScrollTop || pathname !== '/') {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, showScrollTop]);

  return null;
};

export default ScrollToTop;