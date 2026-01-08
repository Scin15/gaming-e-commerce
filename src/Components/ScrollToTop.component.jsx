import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  console.log("Locazione attuale: ", pathname);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // oppure "smooth"
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;