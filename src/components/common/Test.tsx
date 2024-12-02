"use client";
import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    throw new Error();
  });
  return <div>Test</div>;
};

export default Test;
