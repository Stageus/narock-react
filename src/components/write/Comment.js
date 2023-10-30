import React, { useState }  from "react";
import styled from "styled-components";
import { Div,Button } from "../../styled/ProjectStyle";
import Reply from "./Reply";
const Comment = (props) => {

    const {comment, commentIdx, val} = props;
    
    const [activeComment,setActiveComment] = useState(false); //답글버튼
    const [activeModify,setActiveModify] = useState(false); //수정버튼
    const [afterModifyComment,setAfterModifyComment] = useState('');

    const commentEvent = (idx) =>{
        setActiveComment(idx)
        setActiveModify(false);
    }

    const modifyEvent = (idx) => {
        setActiveModify(idx);
        setActiveComment(false)
    }

    const commentValue = (e) => {
        const comment = e.target.value;
        setAfterModifyComment(comment)
    }

    const cancelEvent = () => {
        setActiveComment(false)
        setActiveModify(false);
    }

    return(
        <Div key={commentIdx} borderbottom="1px solid #E2E8FF" justifycontent="space-between">
            {activeComment === commentIdx ? 
                // 답글 버튼 눌렀을 때
                <Div flexdirection="column" alignitems="normal" width="100%" margin="0">
                    <Div margin="0" justifycontent="space-between">
                        <Div>
                            <img src="/img/avatar.png" width="40px" alt="프로필사진" />
                            <Div flexdirection="column" alignitems="flex-start">
                                {comment.commentWriter}
                                <div>{comment.commentContent}</div>
                                <Date>{comment.commentTimestamp}</Date>
                            </Div>
                        </Div>
                        <Div>
                            <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={cancelEvent} />
                            <Button value="완료" backgroundcolor="transparent" color="mainColor" />
                        </Div>
                    </Div>
                    <Reply val={val} commentIdx={commentIdx}/>
                    <div>   
                        <SubCommentInput></SubCommentInput>
                        <SubmitButton value="등록" />
                    </div>
                </Div>
                : activeModify === commentIdx ? 
                    <Div flexdirection="column" alignitems="normal" width="100%" margin="0">
                        <Div margin="0" justifycontent="space-between" flexdirection="column">
                            <Div width="100%" margin="0">
                                <Div width="100%" margin="0">
                                    <img src="/img/avatar.png" width="40px" alt="프로필사진" />
                                    <Div flexdirection="column" alignitems="flex-start">
                                        {comment.commentWriter}
                                        <Div>   
                                            <MainComment onChange={(e) => commentValue(e)} defaultValue={comment.commentContent} /> 
                                        </Div>
                                        <Date>{comment.commentTimestamp}</Date>
                                    </Div>
                                </Div>
                                    <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={cancelEvent} />
                                    <Button value="완료" backgroundcolor="transparent" color="mainColor" />
                            </Div>
                            <Reply val={val} commentIdx={commentIdx}/>
                        </Div>
                    </Div>
                :
                // 기본값
                <Div flexdirection="column" width="100%">
                    <Div width="100%" margin="0">
                        <Div width="100%" margin="0">
                            <img src="/img/avatar.png" width="40px" alt="프로필사진" />
                            <Div flexdirection="column" alignitems="flex-start">
                                {comment.commentWriter}
                                <div>{comment.commentContent}</div>
                                <Date>{comment.commentTimestamp}</Date>
                            </Div>
                        </Div>
                        <Div>
                            {val.reply.length === 1 &&
                            <Button value="답글" backgroundcolor="transparent" color="mainColor" onClick={()=>commentEvent(commentIdx)} /> 
                            }
                            <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={()=>modifyEvent(commentIdx)} />
                            <Button value="삭제" backgroundcolor="transparent" color="mainColor" />
                        </Div>
                    </Div>
                        <Reply val={val} commentIdx={commentIdx}/>
                </Div>
            }
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
    width:99%;
    /* margin-left:7%; */
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