import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostList = (props) => {
    const navigate = useNavigate();
    const { bandname } = props;
    return ( 
        <Box>
            <PostBox onClick={()=>{navigate(`/allband/${bandname}/notice/1`)}}>
                <Notice>공지</Notice>
                <Title>공지사항입니다.</Title>
                <Writer>관리자닉네임</Writer>
                <Post>22:40</Post>
                <Post>511</Post>
                <Post>20</Post>
            </PostBox>
        </Box>
     );
}

const Box = styled.div`
    width:100%;
`

const PostBox = styled.div`
    display:flex;
    border-bottom: 2px solid #e2e8ff;
    padding:5px 0;
    `

const Notice = styled.div`
    width:30px;
    font-weight:bold;
`
const Post = styled.div`
    flex-grow:1;
`

const Title = styled(Post)`
    width:40%;
`

const Writer = styled(Post)`
    width:20%
`
export default PostList;