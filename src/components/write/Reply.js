import React, { useState } from "react";
import styled from "styled-components";
import { Button, Div } from "../../styled/ProjectStyle";

const Reply = (props) => {
    const { val, commentIdx } = props;
    const [activeReply,setActiveReply] = useState(false); //대댓
    const [afterModifyComment,setAfterModifyComment] = useState('');
    const [activeModify,setActiveModify] = useState(false); //수정버튼
    const modifyEvent = (idx) => {
        setActiveReply(idx);
        console.log(idx)
    }

    const commentValue = (e) => {
        const comment = e.target.value;
        setAfterModifyComment(comment)
    }

    const cancelEvent = () => {
        setActiveReply(false)
        setActiveModify(false);
    }

    return(

        <Div width="100%" >
        {val.reply.map((reply,replyIdx)=>{

            if(replyIdx === commentIdx){
            return(
                <Div borderbottom="1px solid #E2E8FF" padding="0 0 0 37px" key={replyIdx} width="100%" margin="0">
                {activeReply === replyIdx ? 
                    <Div justifycontent="space-between" width="100%" margin="0">
                        <Div>
                            <img src={reply.replyImgUrl} width="40px" alt="프로필사진" />
                            <Div flexdirection="column" alignitems="flex-start">
                                {reply.replyWriter}
                                {/* <MainComment onChange={(e) => commentValue(e[replyIdx])} defaultValue={reply.replyContent} /> */}
                                <MainComment onChange={(e) => commentValue(e)} defaultValue={reply.replyContent} />
                                <Date>{reply.replyTimestamp}</Date>
                            </Div>
                        </Div>
                        <Div>
                            <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={cancelEvent} />
                            <Button value="완료" backgroundcolor="transparent" color="mainColor" />
                        </Div>
                    </Div>
                    : 
                    <Div>
                        <Div margin="0" width="100%" justifycontent="space-between">
                            <img src={reply.replyImgUrl} width="40px" alt="프로필사진" />
                            <Div flexdirection="column" alignitems="flex-start" justifycontent="space-between">
                                {reply.replyWriter}
                                <div>{reply.replyContent}</div>
                                <Date>{reply.replyTimestamp}</Date>
                            </Div>
                            <Div>
                                <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={()=>{modifyEvent(replyIdx)}} />
                                <Button value="삭제" backgroundcolor="transparent" color="mainColor" />
                            </Div>
                        </Div>
                    </Div>
                }
                </Div>
                )}

        })}
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

export default Reply;