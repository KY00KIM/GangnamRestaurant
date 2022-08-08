import React from "react";
import Select from 'react-select'
import styled from "styled-components";
import PostInput from './PostInput';

const options = [
    { value: 'meal', label: '식사' },
    { value: 'hobby', label: '취미' },
    { value: 'etc', label: '기타' }
  ] 

const PostHeader = (props) => {
    return (
        <PostSection>
            <Title type="text" placeholder="제목을 입력하세요" defaultValue=""></Title>
            <div>
                <Text>분류 : </Text>
                <SelectArea>
                    <Select
                        key="meal"
                        defaultValue='meal'
                        options={options} />
                </SelectArea>
                <Text>시간 : </Text>
                <TimeArea>
                    <PostInput inputType={"text"} />
                </TimeArea>
            </div>
            <div>
                <Text>위치 : </Text>
                <LocArea>
                    <PostInput inputType={"text"} />
                </LocArea>
            </div>
        </PostSection>
    )
}

export default PostHeader;

const PostSection = styled.section`
    margin-bottom: 1rem;
`
const Title = styled.input`
    font-size: 3rem;
    font-weight: 600;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid #ced4da;
    margin-bottom: 1rem;
    width: 100%;
    height: 4rem;
`;
const Text = styled.h3`
    display: inline-block;
    width: 7%;
`

const SelectArea = styled.div`
    display: inline-block;
    width: 37%;
    margin: 0 5% 0 0;
`
const TimeArea = styled.div`
    display: inline-block;
    width: 43%;
`
const LocArea = styled.div`
    display: inline-block;
    width: 92%;
`
