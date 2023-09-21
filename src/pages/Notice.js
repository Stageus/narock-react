import React, { useState } from "react";
import { useNavigate, useLocation, Link} from 'react-router-dom';

import styled from "styled-components";
import { Button, Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";
import AllPost from "./AllPost";
import Paging from "../components/Paging"
import SearchBox from "../components/common/SearchBox";


import {useRecoilValue} from 'recoil';
import { noticePostState } from '../recoil/BackRecoil';
import { postRowState } from '../recoil/FrontRecoil'
const Notice = () => {
    const post = useRecoilValue(noticePostState);
    const postRow = useRecoilValue(postRowState)
    const sortedPost = [...post].sort((a,b)=>b.postId - a.postId)
    const navigate = useNavigate();
    const location = useLocation().pathname;

    const itemsCountPerPage = 3; // 한 페이지에 표시할 게시물 수
    const [limit, setLimit]= useState(10); 
    const [page, setPage] = useState(1);
    const offset = (page-1)*limit; // 한 페이지에 들어갈 갯수
    const displayedPosts = post.slice(
        offset, offset + limit
    );

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
                <AllPost sortedPost={sortedPost} domain={location}/>
                <Paging 
                activePage={page}
                setPage={setPage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={post.length}
                />
                <Button value="글쓰기" onClick={()=>{navigate('/write')}}/>
                <SearchBox/>
            </Box>  
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`

export default Notice;