import React from "react";

const Button = ({ disabled, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "332px",
        height: "54px",
        borderRadius: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: disabled ? "#DCDCDC" : "#33AEE9",
        color: disabled ? "#777" : "#FCFCFC",
        cursor: disabled ? "unset" : "pointer",
        border: "none",
        fontSize: "21px",
        fontFamily: "SUIT-Regular",
        fontWeight: "600",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
