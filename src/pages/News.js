import React from "react";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";
import { Button, Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";
import AllPost from "./AllPost";
import Paging from "../components/Paging"
import SearchBox from "../components/common/SearchBox";

import {useRecoilValue} from 'recoil';
import { newsPostState } from '../recoil/BackRecoil';
import { postRowState } from '../recoil/FrontRecoil'
const News = () => {
    const post = useRecoilValue(newsPostState);
    const sortedPost = [...post].sort((a,b)=>b.postId - a.postId)
    const navigate = useNavigate();
    const postRow = useRecoilValue(postRowState)
    return (
        <div>
            <Header/>
            <Box>
            <Title>새소식</Title>
                <PostRow
                title={postRow[0].label}
                writer={postRow[1].label}
                createDate={postRow[2].label}
                view={postRow[3].label}
                like={postRow[4].label}/>
                <AllPost sortedPost={sortedPost}/>
                <Paging/>
                <Button value="글쓰기" onClick={()=>{navigate('/write')}}/>
                <SearchBox/>
            </Box>  
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`


export default News;