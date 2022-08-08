import React from "react";
import styled from "styled-components";

const PostInput = (props) => (
    <div>
        <InputField
            type={props.inputType}
            placeholder={props.text}
        ></InputField>
    </div>
)

export default PostInput;

const InputField = styled.input`
    display: inline-block;
    font-size: 1rem;
    outline: none;
    border: 1px solid #ced4da;
    border-radius: 3px;
    width: 100%;
    height: 32px;
    padding: 0.2rem 0.2rem 0.2rem 0.5rem;
`;
