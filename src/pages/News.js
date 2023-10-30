import React from "react";

import styled from "styled-components";
import { Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";

import {useRecoilValue} from 'recoil';
import { postRowState } from '../recoil/FrontRecoil'
import { postState } from "../recoil/BackRecoil";
import PostListBox from "../components/write/PostListBox";
const News = () => {

    const postRow = useRecoilValue(postRowState)
    const posts = useRecoilValue(postState); // postState 셀렉터로 데이터 가져옴

    const bandnameEncoded = decodeURI(window.location.pathname); 
    const domainCategory = bandnameEncoded.split('/');
    const filteredPost = posts.filter(v=>!v.bandName && domainCategory[1] === v.boardCategory);
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
                <PostListBox posts={filteredPost} category="새소식"/>
            </Box>  
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`


export default News;