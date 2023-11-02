import React from "react";
import { useSearchParams } from "react-router-dom";

const BreadCrumb = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ch = searchParams.get("ch");
  const channelName = {
    soongsil: "숭실대",
    yonsei: "연세대",
    janghak: "한국장학재단",
  };

  return (
    <div
      style={{
        position: "absolute",
        color: "#909090",
        fontSize: "14px",
        fontWeight: "500",
        top: "16px",
        right: "165px",
      }}
    >
      home > {channelName[ch]}
    </div>
  );
};

export default BreadCrumb;
