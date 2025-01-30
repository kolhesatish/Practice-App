import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interv = setInterval(() => {
      setSeconds((prev) => prev == 5 ? 0 : prev + 1);
    }, 1000);

    return () => {
       clearInterval(interv); // Cleanup to avoid memory leaks
    };
  }, []); // Empty array -> runs only once

  return <h1>Time Elapsed: {seconds} seconds</h1>;
}

export default Timer;
