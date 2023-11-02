import React, { useEffect } from "react";
import Title from "./Title";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";
import axios from "axios";

const RightSection = ({ q, a }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div style={{ marginTop: "42px", width: "572px" }}>
      <Title boldText={"가장 유사한 FAQ"} normalText={"입니다"} />
      <div
        style={{
          margin: "24px 0",
          height: "138px",
          borderRadius: "20px",
          backgroundColor: "#33AEE9",
          boxSizing: "border-box",
          padding: "26px 32px 10px 59px",
          overflow: "scroll",
          fontSize: "21px",
          color: "#FCFCFC",
          position: "relative",
          fontWeight: "500",
          lineHeight: "1.5",
        }}
      >
        <b
          style={{
            position: "absolute",
            top: "26px",
            left: "30px",
            fontWeight: "900",
          }}
        >
          Q
        </b>
        <p>{q}</p>
      </div>
      <div
        style={{
          height: "396px",
          boxSizing: "border-box",
          borderRadius: "20px",
          backgroundColor: "#F8F8F8",
          padding: "26px 31px 44px 60px",
          overflow: "scroll",
          color: "#121212",
          fontSize: "21px",
          fontWeight: "400",
          lineHeight: "1.5",
          position: "relative",
        }}
      >
        <b
          style={{
            position: "absolute",
            top: "26px",
            left: "31px",
            fontWeight: "900",
            color: "rgba(51, 174, 233, 1)",
          }}
        >
          A
        </b>
        <p>{a}</p>
      </div>
      {pathname === "/history" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <Button text={"새로운 문의하기"} onClick={() => navigate(-1)} />
        </div>
      )}
    </div>
  );
};

export default RightSection;
