import React from "react";

const Title = ({ boldText, normalText }) => {
  return (
    <h1
      style={{
        fontSize: "28px",
        color: "#121212",
        fontWeight: "500",
      }}
    >
      <b style={{ fontWeight: "800" }}>{boldText}</b>
      {normalText}
    </h1>
  );
};

export default Title;
