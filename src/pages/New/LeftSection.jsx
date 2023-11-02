import React, { useState } from "react";
import Title from "../../components/Title";
import arrow from "../../assets/arrow.svg";
import Button from "../../components/Button";
import { useNavigate, useSearchParams } from "react-router-dom";

const LeftSection = ({ setKeyword, handleSearch }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const channelName = searchParams.get("ch");

  const [question, setQuestion] = useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div
      style={{
        width: "572px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "42px",
        }}
      >
        <Title boldText={"새로운 문의"} normalText={"를 입력해 주세요"} />
        <div
          onClick={() => navigate(`/history?ch=${channelName}`)}
          style={{
            display: "flex",
            gap: "3px",
            color: "#33AEE9",
            fontSize: "18px",
            fontWeight: "800",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          이전 문의 내역 조회
          <img src={arrow} alt="" />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <textarea
          onChange={handleQuestionChange}
          value={question}
          maxLength={"300"}
          placeholder="문의 내용을 입력해 주세요"
          style={{
            fontFamily: "SUIT-Regular",
            fontSize: "21px",
            color: "#121212",
            fontWeight: "400",
            lineHeight: "1.5",
            outline: "none",
            backgroundColor: "#F8F8F8",
            resize: "none",
            width: "100%",
            height: "558px",
            padding: "30px",
            borderRadius: "20px",
            border: "none",
            boxSizing: "border-box",
          }}
        />
        <span style={{ position: "absolute", bottom: "27px", right: "30px" }}>
          {question.length}/300
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            handleSearch(question);
          }}
          text={"답변 찾기"}
          disabled={question.length === 0}
        />
      </div>
    </div>
  );
};

export default LeftSection;
