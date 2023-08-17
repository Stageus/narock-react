import React from "react";
import styled from "styled-components";
import PostList from "./PostList";
const PostListBox = () => {
    return ( 
        <Box>
            <SubjectBox>
                <Title>제목</Title>
                <Writer>작성자</Writer>
                <Post>작성날짜</Post>
                <Post>조회수</Post>
                <Post>좋아요</Post>
            </SubjectBox>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
        </Box>
     );
}


const Box = styled.div`
    margin:0 80px;
    width:100%;
`

const SubjectBox = styled.div`
    display:flex;
    border-top:2px solid #3185FC;
    border-bottom:2px solid #3185FC;
`

const Post = styled.div`
    flex-grow:1;
    /* width:10px; */
`
const Title = styled(Post)`
    width:43%;
    text-align:center;
`

const Writer = styled(Post)`
    width:20%
`
export default PostListBox;