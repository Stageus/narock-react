import React, { useEffect, useState } from "react";
import { useRecoilState } from 'recoil';
import { writeState } from "../../recoil/BackRecoil";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";
import { Button, Div, Input } from "../../styled/ProjectStyle";
import { useLocation } from "react-router-dom";

const WriteBox = () => {
    const [write,setWrite] = useRecoilState(writeState);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [checkValue,setCheckValue] = useState(false);
    const location = useLocation();

    console.log(content)

 
    const searchParams = new URLSearchParams(location.search);
    const bandname = searchParams.get('bandname');
    const category = searchParams.get('category');
    const bandIndex = searchParams.get('bandindex');

    let categoryIndex = 0;

    if (category === 'notice') {
        categoryIndex = 0;
    } else if (category === 'concertinfo') {
        categoryIndex = 1;
    } else if (category === 'gallery') {
        categoryIndex = 2;
    }else if (category === 'freeboard') {
        categoryIndex = 3;
    }else if (category === 'news') {
        categoryIndex = 4;
    }else if (category === 'community') {
        categoryIndex = 5;
    }
    const writeOnChange = (e) => {
        // const {name, value, checked} = e.target;
        // setCheckValue(e.target.checked)
        // e.preventDefault();
        setWrite({
            ...write,
            // [name]: value,
            postTitle:title,
            postCategory: categoryIndex,
            isFixed:checkValue,
            postContent: content,
        });
        // console.log(write)
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
        const response = await fetch("https://www.narock.site/post",{
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "credentials": "include",
            "body":JSON.stringify({
                "postCategory": write.postCategory,
                "postTitle": write.postTitle,
                "postContent": write.postContent,
                "isFixed": write.isFixed,
                "bandIndex": 0,
            })
        })
        const result = await response.json()
    
        if(result.success){
            alert("게시글이 등록 되었습니다.")
            console.log(result)
            // navigate('/')    
        }else{
            console.log(result.message);
            console.log(result);
        }
    };

    return(
        <Div height="600px" margin="55px 80px" padding="23px" border="1px solid #3185FC" flexdirection="column" alignitems="unset">
            <div name="bandname">{bandname}</div>
            <div>{category}</div>
            <Div fontSize="20px" color="#3185FC" margin="0">
                <Input name="postTitle" border="none" placeholder="제목을 입력해 주세요." width="90%" fontSize="20px" onChange={e=>setTitle(e.target.value)}/>
                <input type="checkbox" onClick={e=>setCheckValue(e.target.checked)}/> 공지글 설정
            </Div>
            <Quill modules={modules} onChange={writeOnChange} value={content}/>
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