import React from "react";
import ChannelBtn from "./ChannelBtn";

const Main = () => {
  return (
    <div
      style={{
        marginTop: "93px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "67px",
      }}
    >
      <h1 style={{ fontSize: "48px", fontWeight: "500", color: "#121212" }}>
        <b style={{ fontWeight: "800" }}>FAQ 정보</b>가 필요한 채널을 선택해
        주세요
      </h1>
      <div style={{ display: "flex", gap: "90px" }}>
        <ChannelBtn ch="soongsil" />
        <ChannelBtn ch="yonsei" />
        <ChannelBtn ch="janghak" />
      </div>
    </div>
  );
};

export default Main;
