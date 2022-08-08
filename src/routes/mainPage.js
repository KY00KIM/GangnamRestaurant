import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mainPage.css";
import { MdOutlineDining, MdCalendarToday } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
import RecommendModal from "../pages/RecommendModal";
import { GiBowlOfRice } from "react-icons/gi";
import styled from "styled-components";

function MainPage() {
  const [modal, setModal] = useState(false);

  return (
    <div className="main">
      <RecommendModal modal={modal} setModal={setModal} />
      <header>
        <h1>
          강남밥상
          <GiBowlOfRice style={{ marginLeft: "0.1em" }} />
        </h1>
        <Link to="/writepost">
          <PostButton> 게시글 작성 </PostButton>
        </Link>
      </header>
      <div className="todayMenu">
        <div id="todayText">
          <h1>
            오늘의
            <br />
            메뉴는?
          </h1>
        </div>
        <div className="recommend">
          <h3 onClick={() => setModal(true)} style={{ cursor: "pointer" }}>
            추천받으러 가기
          </h3>
        </div>
      </div>
      <div className="choices">
        <div id="classification">
          <h1>분류</h1>
        </div>
        <div className="buttons">
          <div className="category">
            <MdOutlineDining className="icons" />
            <p/>
            식사
          </div>
          <div className="category">
            <FaRunning className="icons" />
            <p/>
            취미
          </div>
          <div className="category">
            <MdCalendarToday className="icons" />
            <p/>
            기타
          </div>
        </div>
      </div>
      <div className="articles">
        <ArticleDiv> 점심에 맥도날드 <br />가실 분 구해요~</ArticleDiv>
        <ArticleDiv> 5월 4일 날 <br /> 저녁 드실 분 <br />  찾습니다!</ArticleDiv>
        <ArticleDiv> 멘토링 끝나고 <br /> 카페 가실 분 <br />있나요??</ArticleDiv>
        <ArticleDiv> ...</ArticleDiv>
        <ArticleDiv> ...</ArticleDiv>
        <ArticleDiv> .... </ArticleDiv>
      </div>
    </div>
  );
}

export default MainPage;

const PostButton = styled.button`
    float: right;
    cursor: pointer;
    outline: none;
    border: 1px solid black;
    border-radius: 4px;
    padding: 0 1.25rem;
    height: 2rem;
    font-size: 1rem;
    margin: 25px;

    background: #ffffff;
    color: black;
    font-weight: bold;
    margin-right: 1rem;
`

const ArticleDiv = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  justify-content : center;
  align-items: center;
`
