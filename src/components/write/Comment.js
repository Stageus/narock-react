import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import { Div,Button } from "../../styled/ProjectStyle";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { afterModifyCommentState, replyContentState } from "../../recoil/BackRecoil";

const Comment = (props) => {

    const { comment,reply, commentDeleteEvent,replySubmitEvent,commentModifyEvent } = props;
    const [activeComment,setActiveComment] = useState(false); //답글버튼
    const [activeModify,setActiveModify] = useState(''); //수정버튼
    const setAfterModifyComment = useSetRecoilState(afterModifyCommentState) //수정한 댓글
    const setReplyContent = useSetRecoilState(replyContentState)  
    

    const toggleCommentEvent = (idx) =>{
        setActiveComment(idx)
        setActiveModify(false);
    }

    const toggleModifyEvent = (idx) => {
        setActiveModify(idx);
        setActiveComment(false)
    }

    const commentValue = (e) => {
        const comment = e.target.value;
        setAfterModifyComment(comment)
        setActiveComment(false)
    }

    const toggleCancelEvent = () => {
        setActiveComment(false)
        setActiveModify(false);
    }
    return(
        <Div borderbottom="1px solid #E2E8FF" justifycontent="space-between">
            {activeComment === comment.commentindex ? 
                // 답글 버튼 눌렀을 때
                <Div flexdirection="column" alignitems="normal" width="100%" >
                    <Div justifycontent="space-between">
                        <Div>
                            <ProfileImg src={comment.userprofileimg} width="40px" alt="프로필사진" />
                            <Div flexdirection="column" alignitems="flex-start" margin="0 0 0 10px">
                                {comment.usernickname}
                                <div>{comment.commentcontent}</div>
                                <Date>{comment.commenttimestamp.substring(0,10)} {comment.commenttimestamp.substring(11,16)}</Date>
                            </Div>
                        </Div>
                        <Div>
                            <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={toggleCancelEvent} />
                        </Div>
                    </Div>
                    <div>   
                        <SubCommentInput onChange={e=>setReplyContent(e.target.value)}></SubCommentInput>
                        {/* <SubmitButton value="등록" onClick={replySubmitEvent}/> */}
                        <SubmitButton value="등록" onClick={replySubmitEvent}/>
                    </div>
                </Div>
                : 
                // 수정버튼 눌렀을 때
                activeModify === comment.commentindex ? 
                    <Div flexdirection="column" alignitems="normal" width="100%" >
                        <Div  justifycontent="space-between" flexdirection="column" margin="0">
                            <Div width="100%" >
                                <Div width="100%" >
                                    <ProfileImg src={comment.userprofileimg} width="40px" alt="프로필사진" />
                                    <Div flexdirection="column" alignitems="flex-start" margin="0 0 0 10px">
                                    <div>{comment.usernickname}</div>
                                        <Div>   
                                            <MainComment onChange={(e) => commentValue(e)} defaultValue={comment.commentcontent} /> 
                                        </Div>
                                        <Date>{comment.commenttimestamp.substring(0,10)} {comment.commenttimestamp.substring(11,16)}</Date>
                                    </Div>
                                </Div>
                                    <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={toggleCancelEvent} />
                                    <Button value="완료" backgroundcolor="transparent" color="mainColor" onClick={commentModifyEvent}/>
                            </Div>
                        </Div>
                    </Div>
                :
                
                reply ?
                <Div flexdirection="column" width="100%">
                    <Div width="100%" >
                        <Div width="100%" justifycontent="space-between" margin="10px">
                            <Div>
                                <ProfileImg src={comment.userprofileimg} width="40px" alt="프로필사진" />
                                <Div flexdirection="column" alignitems="flex-start" margin="0 0 0 10px">
                                    <div>{comment.usernickname}</div>
                                    <div>{comment.commentcontent}</div>
                                    <Date>{comment.commenttimestamp.substring(0,10)} {comment.commenttimestamp.substring(11,16)}</Date>
                                </Div>
                            </Div>
                            {}
                            <Div>
                                <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={()=>toggleModifyEvent(comment.commentindex)} />
                                <Button value="삭제" backgroundcolor="transparent" color="mainColor" onClick={commentDeleteEvent}/>
                            </Div>
                        </Div>
                    </Div>
                </Div>
                :
                // 기본값
                <Div flexdirection="column" width="100%">
                    <Div width="100%" >
                        <Div width="100%" justifycontent="space-between" margin="10px">
                            <Div>
                                <ProfileImg src={comment.userprofileimg} width="40px" alt="프로필사진" />
                                <Div flexdirection="column" alignitems="flex-start" margin="0 0 0 10px">
                                    <div>{comment.usernickname}</div>
                                    <div>{comment.commentcontent}</div>
                                    <Date>{comment.commenttimestamp.substring(0,10)} {comment.commenttimestamp.substring(11,16)}</Date>
                                </Div>
                            </Div>
                            {}
                            <Div>
                                <Button value="답글" backgroundcolor="transparent" color="mainColor" onClick={()=>toggleCommentEvent(comment.commentindex)} /> 
                                <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={()=>toggleModifyEvent(comment.commentindex)} />
                                <Button value="삭제" backgroundcolor="transparent" color="mainColor" onClick={commentDeleteEvent}/>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            }
        </Div>
            
            
    )
}

const Date = styled.div`
    color:#838383;
    font-size:11px;
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

const ProfileImg = styled.img`
    border-radius: 30px;
    width:40px;
    height:40px;
    margin-right:10px;
`

export default Comment;