import React from "react";
import useScrollPosition from "../custom-hooks/useScrollPosition";

function Scroll() {
  const scrollY = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This adds smooth scrolling
    });
  };

  return (
    <div style={{ height: "150vh" }}>
      <h1>Scroll Position: {scrollY}px</h1>
      {scrollY > 300 && (
        <button
          style={{
            position: "fixed",
            bottom: 20,
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}
    </div>
  );
}

export default Scroll;
