import React, { useState } from "react";
import { useNavigate, useLocation, Link} from 'react-router-dom';

import styled from "styled-components";
import { Button, Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";

import {useRecoilValue} from 'recoil';
import { noticePostState } from '../recoil/BackRecoil';
import { postRowState } from '../recoil/FrontRecoil'
import PostListBox from "../components/write/PostListBox";
const Notice = () => {
    const postRow = useRecoilValue(postRowState)
    const posts = useRecoilValue(noticePostState);

    const navigate = useNavigate();
    const location = useLocation().pathname;

    // const itemsCountPerPage = 3; // 한 페이지에 표시할 게시물 수
    // const [limit, setLimit]= useState(10); 
    // const [page, setPage] = useState(1);
    // const offset = (page-1)*limit; // 한 페이지에 들어갈 갯수
    // const displayedPosts = post.slice(
    //     offset, offset + limit
    // );

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
            <PostListBox posts={posts}/>
            </Box>  
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`

export default Notice;