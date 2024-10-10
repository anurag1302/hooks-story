import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  // If an error has occurred, display a fallback UI
  if (hasError) {
    return <h1>Something went wrong. Please try again later.</h1>;
  }

  // Wrap children in a try-catch block to catch errors
  return (
    <>
      {React.Children.map(children, (child) => {
        // Clone the child and pass the handleError function as a prop
        return React.cloneElement(child, { onError: handleError });
      })}
    </>
  );
};

export default ErrorBoundary;
