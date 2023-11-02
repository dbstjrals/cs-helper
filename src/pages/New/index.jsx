import React, { useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "../../components/RightSection";
import BreadCrumb from "./BreadCrumb";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const New = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const channelName = searchParams.get("ch");
  const channelId = {
    soongsil: 2,
    yonsei: 3,
    janghak: 4,
  };

  const [qna, setQna] = useState({
    q: "",
    a: "",
  });

  const handleSearch = async (question) => {
    const res = await axios.post(
      `http://ec2-43-201-90-131.ap-northeast-2.compute.amazonaws.com:8080/api/advice/question`,
      { adviceId: channelId[channelName], sentence: question },
      {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJta2tpbTk5OUBnbWFpbC5jb20iLCJpYXQiOjE2OTg3MjgyNjAsImV4cCI6MTY5OTMzMzA2MCwidXNlcl9pZCI6MiwiZW1haWwiOiJta2tpbTk5OUBnbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIn0.AnXDRfSxCGi1yzuTwj1-k85oYpOkte_oXujzawX93C1co-86VpF8pZdmJlYqw4DY4mB4wuXF3ro8azFaRPPjKw",
        },
      }
    );
    setQna({ q: res.data.question, a: res.data.answer });
  };

  return (
    <div style={{ position: "relative" }}>
      <BreadCrumb />
      <div style={{ display: "flex", gap: "58px" }}>
        <LeftSection handleSearch={handleSearch} />
        <RightSection q={qna.q} a={qna.a} />
      </div>
    </div>
  );
};

export default New;
