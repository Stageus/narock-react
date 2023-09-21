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
    width:19.5%;
    /* margin-left:1%; */
    text-align:center;
`

export default PostRow;