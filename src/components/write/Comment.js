import React, { useState } from "react";
import styled from "styled-components";
import { Button, Div } from "../../styled/ProjectStyle";

const Comment = (props) => {
    const { bandname, postId, post, comment, reply } = props;
    // const [comments, setComments] = useRecoilState(commentState);
    const [active,setActive] = useState(false);
    const [afterModifyComment,setAfterModifyComment] = useState('');
    const [isComment,setIsComment] = useState(false);
    const posts = post.filter(p=>p.postIndex === parseInt(postId));

    console.log(posts)
    const replyEvent = () =>{
        setActive(!active);
    }

    const modifyEvent = () => {
        setIsComment(!isComment)
    }

    const commentValue = (e) => {
        const comment = e.target.value;
        setAfterModifyComment(comment)
    }

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
                        <Div key={commentIdx} borderbottom="1px solid #E2E8FF">
                            <img src="/img/avatar.png" width="40px" alt="프로필사진" />
                            <Div flexdirection="column" alignitems="flex-start">
                                {comment.commentWriter}
                            </Div>
                            {isComment ? 
                                <MainComment onChange={(e) => commentValue(e)} defaultValue={comment.commentContent} />
                            : 
                                <div>{comment.commentContent}</div>
                            }
                            <Date>{comment.commentTimestamp}</Date>
                            {isComment ? 
                                <Div>
                                <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={() => setIsComment(!isComment)} />
                                <Button value="완료" backgroundcolor="transparent" color="mainColor" />
                                </Div>
                            : 
                                <Div>
                                <Button value="답글" backgroundcolor="transparent" color="mainColor" onClick={replyEvent} />
                                <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={modifyEvent} />
                                <Button value="삭제" backgroundcolor="transparent" color="mainColor" />
                                </Div>
                            }
                        </Div>
                    ))}

                    {val.reply.map((reply, replyIdx) => {
                        return(
                            <Div borderbottom="1px solid #E2E8FF" padding="0 0 0 37px" key={replyIdx}>
                            <img src={reply.replyImgUrl} width="40px" alt="프로필사진" />
                            <Div flexdirection="column" alignitems="flex-start">{reply.replyWriter}</Div>
                            {isComment ? 
                                <MainComment onChange={(e) => commentValue(e)} defaultValue={reply.replyContent} />
                            : 
                                <div>{reply.replyContent}</div>
                            }
                            <Date>{reply.replyTimestamp}</Date>
                            {isComment ? 
                                <Div>
                                    <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={() => setIsComment(!isComment)} />
                                    <Button value="완료" backgroundcolor="transparent" color="mainColor" />
                                </Div>
                            : 
                                <Div>
                                <Button value="답글" backgroundcolor="transparent" color="mainColor" onClick={replyEvent} />
                                <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={modifyEvent} />
                                <Button value="삭제" backgroundcolor="transparent" color="mainColor" />
                                </Div>
                            }
                            </Div>
                        )
                    })}

                    {active[idx] === idx && 
                        <Div>
                        <SubCommentInput></SubCommentInput>
                        <SubmitButton value="등록" />
                        </Div>
                    }
                </Div>
  );
})}

        </Div>
    )
}

const Date = styled.div`
    color:#838383;
    font-size:11px;
`

const SubmitComment = styled.div`
    /* margin-left:7%; */
    border-bottom: 1px solid #E2E8FF;
`
const SubCommentInput = styled.textarea`
    width:95%;
    margin-left:7%;
    height:80px;
    resize:none;
    border: 1px solid #ADBDFF;
    padding:5px;
`
const MainComment = styled(SubCommentInput)`
    width:100%;
    margin:0;
`
const SubmitButton = styled(Button)`
    position:absolute;
    right:0;
    bottom:0;

`

export default Comment;