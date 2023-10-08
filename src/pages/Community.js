import React from "react";
import axios from 'axios';

import styled from "styled-components";
import { Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";
import PostListBox from "../components/write/PostListBox";

import { useRecoilValue } from 'recoil';
import { communityPostState } from '../recoil/BackRecoil';
import { postRowState } from '../recoil/FrontRecoil'
const Community = () => {
    const posts = useRecoilValue(communityPostState);
    const postRow = useRecoilValue(postRowState)

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
                <PostListBox posts={posts}/>
            </Box>  
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`
export default Community;