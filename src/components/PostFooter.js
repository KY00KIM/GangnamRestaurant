import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import PostInput from './PostInput';

const PostFooter = (props) => {
    return (
        <FooterSection>
            <UserInfoDiv>
                <NameInputDiv><PostInput inputType={"text"} text={"이름"} /></NameInputDiv>
                <PwInputDiv><PostInput inputType={"password"} text={"비밀번호"} /></PwInputDiv>
            </UserInfoDiv>
            <RegisterDiv>
                <Link to = "/">
                    <CancelButton>취소</CancelButton>
                </Link>
                <Link to = "/">
                    <RegisterButton>등록</RegisterButton>
                </Link>
                
            </RegisterDiv>
        </FooterSection>
    )
}

export default PostFooter;


const FooterSection = styled.section`
    display: inline-block;
    margin-top: 3rem; 
`;

/* 하단 유저 정보 입력 & 등록 버튼 영역 */
const UserInfoDiv = styled.div`
    float: left;
    align-items: center;
`
const RegisterDiv = styled.div`
    float: right;
    align-items: center;
`

/* 유저 입력창 width 조정 */
const NameInputDiv = styled.div`
    display: inline-block;
    width: 30%;
    margin-right: 20px;
`
const PwInputDiv = styled.div`
    display: inline-block;
    width: 50%;
`

/* 등록&취소 버튼 영역 */
const CancelButton = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 0 1.25rem;
    height: 2rem;
    font-size: 1rem;

    background: #e9ecef;
    color: #495057;
    margin-right: 1rem;
`
const RegisterButton = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 0 1.25rem;
    height: 2rem;
    font-size: 1rem;

    font-weight: 700;
    background-color: #262626;
    color: #fff;
`
