import React, { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "../../components/RightSection";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const History = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ch = searchParams.get("ch");
  const channelId = {
    soongsil: 2,
    yonsei: 3,
    janghak: 4,
  };

  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await axios.get(
        `http://ec2-43-201-90-131.ap-northeast-2.compute.amazonaws.com:8080/api/advice/${channelId[ch]}/question`,
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJta2tpbTk5OUBnbWFpbC5jb20iLCJpYXQiOjE2OTg3MjgyNjAsImV4cCI6MTY5OTMzMzA2MCwidXNlcl9pZCI6MiwiZW1haWwiOiJta2tpbTk5OUBnbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIn0.AnXDRfSxCGi1yzuTwj1-k85oYpOkte_oXujzawX93C1co-86VpF8pZdmJlYqw4DY4mB4wuXF3ro8azFaRPPjKw",
          },
        }
      );
      setHistory(res.data);
      console.log(res.data);
    };
    fetchHistory();
  }, []);

  return (
    <div style={{ display: "flex", gap: "58px" }}>
      <LeftSection
        history={history}
        selected={selected}
        setSelected={setSelected}
      />
      <RightSection
        history={history}
        q={history[selected]?.question}
        a={history[selected]?.answer}
      />
    </div>
  );
};

export default History;
