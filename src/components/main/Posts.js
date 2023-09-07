import React from 'react'
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Posts = (props) => {

    const {bandname,postTitle,boardName,like,date,view,writer,postId} = props;
    console.log(postId)
    const navigate = useNavigate();
    return(
        <Box>
            <Content onClick={() => { navigate(bandname ? `/allband/${bandname}/notice/${postId}` : '#') }}>
                {postId && <FlexItem>{postId}</FlexItem>}
                {postTitle && <FlexItem2>{postTitle}</FlexItem2>}
                {boardName && <FlexItem3>{boardName}</FlexItem3>}
                {writer && <FlexItem>{writer}</FlexItem>}
                {date && <FlexItem>{date}</FlexItem>}
                {view && <FlexItem>{view}</FlexItem>}
                {like && <FlexItem>{like}</FlexItem>}
            </Content>
        </Box>
    )
}

const Box = styled.div`
    width:100%;
`

const Content = styled.div`
    display:flex;
    border-bottom: 2px solid #e2e8ff;
    margin:10px 0;
    align-items:center;
    width:100%;
`

const FlexItem = styled.div`
    width:20%;
    margin-left:5px;
`
const FlexItem2 = styled.div`
    width:45%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
`
const FlexItem3 = styled.div`
    flex-grow:1;
    flex-basis:100px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    margin-left:5px;
`

export default Posts