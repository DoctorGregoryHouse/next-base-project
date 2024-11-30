"use client";
import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      Something went wrong: {error.message}{" "}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default error;
