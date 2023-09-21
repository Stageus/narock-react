import React from "react";
import styled from "styled-components";
const PostRow = (props) => {
    const {title, 
        writer, 
        createDate, 
        view, 
        like,
        userId,
        nickname,
        joinDate,
        role,
     } = props;
    return (
        <SubjectBox>
            {title && <Post>{title}</Post>}
            {writer && <Post>{writer}</Post>}
            {createDate && <Post>{createDate}</Post>}
            {view && <Post>{view}</Post>}
            {like && <Post>{like}</Post>}
            {userId && <Post>{userId}</Post>}
            {nickname && <Post>{nickname}</Post>}
            {joinDate && <Post>{joinDate}</Post>}
            {role && <Post>{role}</Post>}
            {/* <Title>제목</Title>
            <Writer>작성자</Writer>
            <Post>작성날짜</Post>
            <Post>조회수</Post>
            <Post>좋아요</Post> */}
        </SubjectBox>            
    );
};


const SubjectBox = styled.div`
    display:flex;
    border-top:2px solid #3185FC;
    border-bottom:2px solid #3185FC;
    width:100%;
`
const Post = styled.div`
    flex-grow:1;
`
const Title = styled(Post)`
    width:43%;
    text-align:center;
`
const Writer = styled(Post)`
    width:20%
`

export default PostRow;