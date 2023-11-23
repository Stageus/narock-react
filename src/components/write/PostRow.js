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
        id,
        contents,
        requestBoard,
        requestDate
     } = props;
    return (
        <SubjectBox>
            <Tr>
                <th></th>
                {title && <Title>{title}</Title>}
                {writer && <Writer>{writer}</Writer>}
                {createDate && <Post>{createDate}</Post>}
                {view && <Post>{view}</Post>}
                {like && <Post>{like}</Post>}
                {userId && <Post>{userId}</Post>}
                {nickname && <Post>{nickname}</Post>}
                {joinDate && <Post>{joinDate}</Post>}
                {role && <Post>{role}</Post>}
                {id && <Post>{id}</Post>}
                {contents && <Post>{contents}</Post>}
                {requestBoard && <Post>{requestBoard}</Post>}
                {requestDate && <Post>{requestDate}</Post>}
                <th></th>
            </Tr>
        </SubjectBox>            
    );
};


const SubjectBox = styled.thead`
    border-top:2px solid #3185FC;
    border-bottom:2px solid #3185FC;
    width:100%;
`

const Tr = styled.tr`
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-around;
`
const Post = styled.th`
    /* margin-left:1%; */
    text-align:center;
`
const Title = styled.th`
    width:40%
`

const Writer = styled.th`
    width:20%;
`
export default PostRow;