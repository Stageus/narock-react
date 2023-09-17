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
import { communityPostState } from '../recoil/BackRecoil';

const Community = () => {
    const post = useRecoilValue(communityPostState);
    const sortedPost = [...post].sort((a,b)=>b.postId - a.postId)
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <Box>
            <Title>커뮤니티</Title>
                <PostRow/>
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
export default Community;