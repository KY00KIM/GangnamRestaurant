import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import PostHeader from '../components/PostHeader';
import PostEditor from '../components/PostEditor';
import PostFooter from "../components/PostFooter";


function WritePost(props) {
    return (
        <div>
            <Header />
            <PostEditorSection>
                {/* 게시글 헤더 (제목 & 분류) */}
                <PostHeader />

                {/* 게시글 에디터 */}
                <PostEditor />

                {/* 등록 */}
                <PostFooter />
            </PostEditorSection>
        </div>
    )
}

export default WritePost;

const PostEditorSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5rem 1rem;
    width: 1024px;
    margin: 0 auto;
    background-color: #fff;
`