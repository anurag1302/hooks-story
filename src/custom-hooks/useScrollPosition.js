import { useState, useEffect } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
