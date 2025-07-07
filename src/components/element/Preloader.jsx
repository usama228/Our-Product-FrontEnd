"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // Set a timeout
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 400);

    // Clear the timeout when the component unmounts or when a dependency changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [setLoaded]);
 

  return (
    <div className="preloader" style={loaded ? { display: "none" } : {}}></div>
  );
}
