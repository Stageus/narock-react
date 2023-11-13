import React, { useEffect, useState } from "react";
import axios from 'axios';

import styled from "styled-components";
import { Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";
import PostListBox from "../components/write/PostListBox";

import { useRecoilValue } from 'recoil';
// import { communityPostState } from '../recoil/BackRecoil';
import { postDetailState } from '../recoil/BackRecoil';
import { postRowState } from '../recoil/FrontRecoil'
const Community = () => {
    const posts = useRecoilValue(postDetailState);
    const postRow = useRecoilValue(postRowState);

    const bandnameEncoded = decodeURI(window.location.pathname); 
    const domainCategory = bandnameEncoded.split('/');
    const [postData, setPostData] = useState([]);
    useEffect(()=>{
        axios.get("https://www.narock.site/post/all",
        {
            withCredentials: true,
            params:{
                postCategory:5,
                // bandIndex:1,
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
                <Title>커뮤니티</Title>
                <PostRow                
                title={postRow[0].label}
                writer={postRow[1].label}
                createDate={postRow[2].label}
                view={postRow[3].label}
                like={postRow[4].label}/>
                <PostListBox posts={postData} category={domainCategory[1]}/>
            </Box>  
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`
export default Community;