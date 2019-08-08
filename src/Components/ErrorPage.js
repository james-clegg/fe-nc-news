import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <p className="ErrorMessage">
      ERROR {error.status} {error.msg}
    </p>
  );
};

export default ErrorPage;
