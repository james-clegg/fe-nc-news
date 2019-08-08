import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <p>
      ERROR {error.status} {error.msg}
    </p>
  );
};

export default ErrorPage;
