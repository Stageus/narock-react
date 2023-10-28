import React, { useState } from "react";
import styled from "styled-components";
import { Button, Div } from "../../styled/ProjectStyle";
import { useRecoilValue } from 'recoil';
import { commentState } from "../../recoil/BackRecoil";
import Comment from "./Comment";

const CommentBox = (props) => {
    const { bandname, postId, post } = props;

    const posts = post.filter(p=>p.postIndex === parseInt(postId));

    // const modifyComment = (idx,value) => { // 수정 클릭 후 바로 완료 누르면 내용 지워짐.ㅠㅠ
    //     const updatedComments = [...comments]; //복사
    //     const updatedComment = {
    //         ...updatedComments[idx],
    //         content: value,
    //       };

    //       updatedComments[idx] = updatedComment;
    //       setComments(updatedComments)
    //       setIsComment(!isComment)

    // }
    return(
        <Div padding="20px" margin="0" border="1px solid #e2e8ff" display="block">
            <div>댓글</div>
            {posts.map((val, idx) => {
            return (
                <Div display="block" margin="0" key={idx}>
                    {val.comment.map((comment, commentIdx) => (
                        <Comment comment={comment} commentIdx={commentIdx} val={val}/>
                    ))}
                    {/* 댓글 입력창 */}
                    <Div>   
                        <SubCommentInput></SubCommentInput>
                        <SubmitButton value="등록" />
                    </Div>
                </Div>
  );
})}

        </Div>
    )
}



const SubCommentInput = styled.textarea`
    width:99%;
    /* margin-left:7%; */
    height:80px;
    resize:none;
    border: 1px solid #ADBDFF;
    padding:5px;
`

const SubmitButton = styled(Button)`
    position:absolute;
    right:0;
    bottom:0;

`

export default CommentBox;