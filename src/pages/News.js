import React from "react";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";
import { Button, Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";

import {useRecoilValue} from 'recoil';
import { postRowState } from '../recoil/FrontRecoil'
import { newsPostState } from "../recoil/BackRecoil";
import PostListBox from "../components/write/PostListBox";
const News = () => {

    const navigate = useNavigate();
    const postRow = useRecoilValue(postRowState)
    const posts = useRecoilValue(newsPostState); // postState 셀렉터로 데이터 가져옴
    // const comments = useRecoilValue(commentState);

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
            <PostListBox posts={posts}/>
            </Box>  
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`


export default News;