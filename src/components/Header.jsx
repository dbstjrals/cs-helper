import React from "react";
import logo from "../assets/logo.svg";
import title from "../assets/title.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  return (
    <div
      style={{
        borderBottom: "2px solid rgba(0, 0, 0, 0.10)",
        height: "68px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          paddingLeft: "169px",
          boxSizing: "border-box",
          width: "1536px",
          margin: "0 auto",
        }}
      >
        <div
          onClick={pathname === "/" ? () => {} : () => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: pathname === "/" ? "unset" : "pointer",
          }}
        >
          <img src={logo} alt="" />
          <img src={title} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
