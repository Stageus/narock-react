import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";
import { Button, Div, Input } from "../../styled/ProjectStyle";

const WriteBox = () => {
    const [contents, setContents] = useState('');
    const reactQuillOnChange = (value) => {
        console.log(value)
        setContents(value)
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
    return(
        <Div margin="55px 80px" padding="23px" border="1px solid #3185FC" flexDirection="column" alignItems="unset">
            <div>게시판 이름</div>
            <Div fontSize="20px" color="#3185FC" margin="0">
                <Input border="none" placeholder="제목을 입력해 주세요." width="90%" fontSize="20px"/>
                <input type="checkbox"/> 공지글 설정
            </Div>
            {/* <Div border="1px solid #E0E6FF" margin="10px 0">파일첨부</Div> */}
            <ReactQuill modules={modules} onChange={reactQuillOnChange}/>
            {/* <div dangerouslySetInnerHTML={{ __html : contents  }} /> */}
            <Button value="등록" position="absolute" right="0"/>
        </Div>
    )
}
export default WriteBox;