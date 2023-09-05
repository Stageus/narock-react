import React from "react";
import styled from "styled-components";
import { Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";
import AllPost from "./AllPost";
import Paging from "../components/Paging"
import SearchBox from "../components/common/SearchBox";

import {useRecoilValue} from 'recoil';
import { noticePostState } from '../recoil/BackRecoil';

const Notice = () => {
    const post = useRecoilValue(noticePostState);
    const sortedPost = [...post].sort((a,b)=>b.postId - a.postId)

    return (
        <div>
            <Header/>
            <Box>
            <Title>공지사항</Title>
                <PostRow/>
                <AllPost sortedPost={sortedPost}/>
                <Paging/>
                <SearchBox/>
            </Box>  
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`

export default Notice;