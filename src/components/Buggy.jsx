import React from "react";

const Buggy = ({ onError }) => {
  throw new Error("I crashed because I am a component with some bugs");

  return <div>Buggy Component</div>;
};

export default Buggy;
