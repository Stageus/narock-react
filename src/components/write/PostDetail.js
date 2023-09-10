import React from "react";
import { styled } from "styled-components";
import { Align,Button } from "../../styled/ProjectStyle";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";

const PostDetail = (props) => {
    const { post, bandname } = props;
    const navigate = useNavigate();
    return(
        <React.Fragment>
            <div>{post.boardName}</div>
            <div>{post.postTitle}</div>
            <AlignBox>
                <Align>
                    <FlexItem>프로필사진</FlexItem>
                    <FlexItem>{post.writer}</FlexItem>
                    <FlexItem>{post.view}</FlexItem>
                    <FlexItem>{post.date}</FlexItem>
                    <FlexItem>댓글갯수</FlexItem>
                </Align>
                <Align>
                    <Button value="수정" backgroundcolor="white" color="#3185FC" border="1px solid #3185FC"/>
                    <Button value="삭제"backgroundcolor="white" color="#3185FC" border="1px solid #3185FC"/>
                    <Button value="목록" type="button" onClick={()=>{navigate(`/allband/${bandname}/notice`)}}/>
                </Align>
            </AlignBox>
            <ContentBox>{post.content}</ContentBox>
            <Comment/>
        </React.Fragment>
    )
}

const AlignBox = styled(Align)`
    justify-content:space-between;
    border-bottom: 1px solid #E2E8FF;
`
const FlexItem = styled.div`
    margin-right:10px;
`

const ContentBox = styled.div`
    margin: 20px 0;
`

export default PostDetail;

