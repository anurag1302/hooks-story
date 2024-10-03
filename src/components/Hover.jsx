import React from "react";
import useHover from "../custom-hooks/useHover";

function Hover() {
  const [hoverRef, isHovered] = useHover();

  return (
    <div
      ref={hoverRef}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: isHovered ? "lightblue" : "lightgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isHovered ? "👋 Hovering!" : "Hover over me!"}
    </div>
  );
}

export default Hover;
