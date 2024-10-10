import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import BuggyComponent from "../components/Buggy";

const CallBuggy = () => {
  return (
    <ErrorBoundary>
      <h1>My Buggy App</h1>
      <BuggyComponent />
    </ErrorBoundary>
  );
};

export default CallBuggy;
