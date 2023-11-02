import React, { useState } from "react";
import Title from "../../components/Title";
import { useSearchParams } from "react-router-dom";

const LeftSection = ({ history, selected, setSelected }) => {

  return (
    <div style={{ marginTop: "42px", width: "572px" }}>
      <Title boldText={"이전 문의"} normalText={"내역입니다"} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "24px",
          height: "80vh",
          overflow: "scroll",
        }}
      >
        {history.map((item, index) => {
          return (
            <div
              onClick={() => setSelected(index)}
              key={index}
              style={{
                cursor: selected === index ? "unset" : "pointer",
                fontSize: "21px",
                flexShrink: "0",
                boxSizing: "border-box",
                borderRadius: "20px",
                color: selected === index ? "#FCFCFC" : "#121212",
                backgroundColor: selected === index ? "#33AEE9" : "#F8F8F8",
                padding: "26px 32px 26px 59px",
                position: "relative",
                lineHeight: "1.5",
              }}
            >
              <b
                style={{
                  position: "absolute",
                  top: "26px",
                  left: "30px",
                  color: selected === index ? "#FCFCFC" : "#33AEE9",
                  fontWeight: "900",
                }}
              >
                Q
              </b>
              <p>
                {item.question}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSection;
