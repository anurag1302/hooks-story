import { useState, useRef, useEffect } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const handleMouseOver = () => setIsHovered(true);
      const handleMouseOut = () => setIsHovered(false);

      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);

      return () => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);

  return [elementRef, isHovered];
}

export default useHover;
