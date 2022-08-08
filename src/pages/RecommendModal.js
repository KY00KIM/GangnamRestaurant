import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Map, { extractRandom } from "./Map";
import data from "./data";
import "../title.css";
import { GiBowlOfRice } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
function RecommendModal({ modal, setModal }) {
  const [recommend, setRecommend] = useState(false);
  const [store, setStore] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setStore(extractRandom(data));
  }, []);
  const onRepeatClick = () => {
    setStore(extractRandom(data));
    console.log(store);
  };
  const onRedirect = () => {
    navigate("/writepost");
  };
  return (
    <>
      {modal && (
        <>
          <Modal>
            {recommend ? (
              <>
                <Title>
                  강남밥상
                  <GiBowlOfRice style={{ marginLeft: "0.1em" }} />
                </Title>
                <RowDiv>
                  <div>
                    <h3>{store.name}</h3>
                    <hr />
                    <div>{store.address}</div>
                  </div>
                  <Map name={store.name} lngg={store.lngg} latt={store.latt} />
                </RowDiv>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  장소가 마음에 드시나요? 함께 할 사람을 구해보세요!
                </div>
                <RowDiv>
                  <Button onClick={onRepeatClick}>다시 추천 받기</Button>
                  <Button onClick={onRedirect}>게시글 올리기</Button>
                </RowDiv>
              </>
            ) : (
              <>
                <h1>
                  강남밥상
                  <GiBowlOfRice style={{ marginLeft: "0.1em" }} />
                </h1>
                <div>
                  메뉴 결정 고민은 이제 그만~ 강남밥상이 식당을 추천해드립니다.
                  <br />
                  어느 식당이 열었는지 모르겠다구요? 현재 열려있는 곳을
                  추천해드릴게요!
                </div>
                <Button onClick={() => setRecommend(true)}>
                  식당 추천받기
                </Button>
              </>
            )}
          </Modal>
          <Overlay onClick={() => setModal(false)} />
        </>
      )}
    </>
  );
}

export default RecommendModal;
const Title = styled.h2``;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
`;
const Modal = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: white;
  left: 50%;
  top: 10%;
  transform: translatex(-50%);
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 5em;
  border-radius: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1em;
  z-index: 10;
`;
const Button = styled.button`
  background-color: white;
  border-radius: 1em;
  cursor: pointer;
  border: 1px solid grey;
  padding: 0.5em;
`;
const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
