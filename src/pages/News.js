import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";

import {useRecoilValue} from 'recoil';
import { postRowState } from '../recoil/FrontRecoil'
import { postDetailState } from "../recoil/BackRecoil";
import PostListBox from "../components/write/PostListBox";
import axios from "axios";
const News = () => {

    const postRow = useRecoilValue(postRowState)
    const posts = useRecoilValue(postDetailState); // postState 셀렉터로 데이터 가져옴
    const [totalPost, setTotalPost] = useState('');
    
    const bandnameEncoded = decodeURI(window.location.pathname); 
    const domainCategory = bandnameEncoded.split('/');
    const [postData, setPostData] = useState([]);

    useEffect(()=>{
        axios.get("https://www.narock.site/post/all",
        {
            withCredentials: true,
            params:{
                postCategory:4,
                bandIndex:1,
                pages:1
            }
        }
        )
        .then(function (response) {
             console.log(response)
             setPostData(response.data.post)
             setTotalPost(response.data.postCount)
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
                <Title>새소식</Title>
                <TableBox>
                    <PostRow
                    title={postRow[0].label}
                    writer={postRow[1].label}
                    createDate={postRow[2].label}
                    view={postRow[3].label}
                    like={postRow[4].label}/>
                    <PostListBox posts={postData} category={domainCategory[1]} totalItemsCount={totalPost}/>
                </TableBox>
            </Box>  
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`
const TableBox = styled.table`
    padding:0 70px;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`

export default News;