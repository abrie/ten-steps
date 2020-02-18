import React, { useEffect } from "react";
import reportMetric from "../Metrics";

export default function() {
  useEffect(() => {
    reportMetric({ action: "arrived" });
  }, []);

  return (
    <p>
      This app demonstrates proceedural music generation. A song invented on the
      fly. It begins with a series of monotonous beeps, and grows into something
      resembling music. Written in Javascript using simple algorithms and
      elementary music theory.
    </p>
  );
}
