import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link} from 'react-router-dom';

import styled from "styled-components";
import { Title } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import PostRow from "../components/write/PostRow";

import {useRecoilValue} from 'recoil';
// import { postState } from '../recoil/BackRecoil';
import { postRowState } from '../recoil/FrontRecoil'
import PostListBox from "../components/write/PostListBox";
import axios from "axios";

const Notice = () => {
    const postRow = useRecoilValue(postRowState)
    // const posts = useRecoilValue(postState);

    const [postData, setPostData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPost, setTotalPost] = useState('');
    const bandnameEncoded = decodeURI(window.location.pathname); 
    const domainCategory = bandnameEncoded.split('/');

    console.log(domainCategory)
    console.log(postData)
    // const filteredPost = posts.filter(v=>!v.bandName && domainCategory[1] === v.boardCategory);

    useEffect(()=>{
        axios.get("https://www.narock.site/post/all",
        {
            withCredentials: true,
            params:{
                postCategory:0,
                bandIndex:1,
                pages:currentPage
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
    },[currentPage])

    return (
        <div>
            <Header/>
            <Box>
            <Title>공지사항</Title>
            <TableBox>
                <PostRow                
                    title={postRow[0].label}
                    writer={postRow[1].label}
                    createDate={postRow[2].label}
                    view={postRow[3].label}
                    like={postRow[4].label}
                />
                <PostListBox posts={postData} category={domainCategory[1]} />
                    <div>
                        <Pagination onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>◀</Pagination>
                            <span>{currentPage}</span>
                        <Pagination onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>▶</Pagination>
                    </div>
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
const Pagination = styled.button`
    border:none;
    background-color:transparent;
    cursor:pointer;
`

export default Notice;