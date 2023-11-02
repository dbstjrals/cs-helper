import React from "react";
import soongsil_logo from "../../assets/soongsil.png";
import yonsei_logo from "../../assets/yonsei.png";
import janghak_logo from "../../assets/janghak.png";
import { useNavigate } from "react-router-dom";

const ChannelBtn = ({ ch }) => {
  const navigate = useNavigate();

  const logo = {
    soongsil: soongsil_logo,
    yonsei: yonsei_logo,
    janghak: janghak_logo,
  };

  const logoWidth = {
    soongsil: "203px",
    yonsei: "230px",
    janghak: "201px",
  };

  const channelName = {
    soongsil: <h3>숭실대</h3>,
    yonsei: <h3>연세대</h3>,
    janghak: (
      <h3>
        한국장학재단 <br />{" "}
        <span style={{ fontSize: "21px", fontWeight: "500" }}>
          일반 상환 학자금 대출
        </span>
      </h3>
    ),
  };

  return (
    <div
      onClick={() => navigate(`/new-question?ch=${ch}`)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "280px",
          aspectRatio: "1",
          backgroundColor: "#EFFAFF",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width={logoWidth[ch]} src={logo[ch]} alt="" />
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "28px",
          lineHeight: "40px",
          fontWeight: "700",
          color: "#121212",
        }}
      >
        {channelName[ch]}
      </p>
    </div>
  );
};

export default ChannelBtn;
