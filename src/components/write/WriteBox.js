import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import { writeState } from "../../recoil/BackRecoil";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";
import { Button, Div, Input } from "../../styled/ProjectStyle";

const WriteBox = () => {
    const [write,setWrite] = useRecoilState(writeState);
    const [content, setContent] = useState('');

    const writeOnChange = (e) => {
        const {name, value} = e.target;
        const checkValue = e.target.checked;
        e.preventDefault();
        setWrite({
          ...write,
          [name]: value,
          isFixed:checkValue,
          postContent: content,
        });
    }
    const modules = {
        toolbar: {
            container: [
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'align': [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
              [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
              ['image', 'video'],
              ['clean']  
            ],
        }
    }


    const PostSubmitEvent = async () => {
        const submitData = {
            "postCategory": write.postCategory,
            "postTitle": write.postTitle,
            "postContent": write.postContent,
            "isFixed": write.isFixed,
            "bandIndex": write.bandIndex
        };

        const response = await fetch("https://www.narock.site/post", {
            "method": "POST",
            "headers": {
            "Content-Type": "application/json" // 보내줄 데이터가 json 타입이라고 선언
            },
            "body": JSON.stringify(submitData)
        });
    
        console.log(write)
        const result = await response.json();
        if (result.success) {
            alert("ㅇㅋ");
        } else {
            alert(result.message);
        }
    };

    return(
        <Div height="600px" margin="55px 80px" padding="23px" border="1px solid #3185FC" flexdirection="column" alignitems="unset" onChange={writeOnChange}>
            <div>게시판 이름</div>
            <Div fontSize="20px" color="#3185FC" margin="0">
                <Input name="postTitle" border="none" placeholder="제목을 입력해 주세요." width="90%" fontSize="20px"/>
                <input type="checkbox"/> 공지글 설정
            </Div>
            <Quill modules={modules} onChange={setContent} value={content}/>
            <SubmitButton value="등록" onClick={PostSubmitEvent}/>
        </Div>
    )
}

const Quill = styled(ReactQuill)`
    height:75%;
`

const SubmitButton = styled(Button)`
    z-index: 10;
    position:absolute;
    bottom:0;
    right:15px;
`
export default WriteBox;