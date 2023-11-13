import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link} from 'react-router-dom';

import styled from "styled-components";
import { Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";

import {useRecoilValue} from 'recoil';
// import { postState } from '../recoil/BackRecoil';
import { postRowState } from '../recoil/FrontRecoil'
import PostListBox from "../components/write/PostListBox";
import axios from "axios";

const Notice = () => {
    const postRow = useRecoilValue(postRowState)
    // const posts = useRecoilValue(postState);

    const [postData, setPostData] = useState([]);
    const bandnameEncoded = decodeURI(window.location.pathname); 
    const domainCategory = bandnameEncoded.split('/');

    console.log(domainCategory)
    // const filteredPost = posts.filter(v=>!v.bandName && domainCategory[1] === v.boardCategory);

    useEffect(()=>{
        axios.get("https://www.narock.site/post/all",
        {
            withCredentials: true,
            params:{
                postCategory:0,
                bandIndex:1,
                pages:1
            }
        }
        )
        .then(function (response) {
             console.log(response)
             setPostData(response.data.post)
             console.log(postData)
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    },[])

    return (
        <div>
            <Header/>
            <Box>
            <Title>공지사항</Title>
                <PostRow                
                    title={postRow[0].label}
                    writer={postRow[1].label}
                    createDate={postRow[2].label}
                    view={postRow[3].label}
                    like={postRow[4].label}
                />
            {/* <PostListBox posts={filteredPost} category={domainCategory[1]}/> */}
            <PostListBox posts={postData} category={domainCategory[1]} />
            </Box>  
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`

export default Notice;