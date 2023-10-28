import React, { useState } from "react";
import styled from "styled-components";
import { Button, Div } from "../../styled/ProjectStyle";

const Reply = (props) => {
    const { val,activeComment } = props;
    const [activeReply,setActiveReply] = useState(false); //대댓
    const [afterModifyComment,setAfterModifyComment] = useState('');
    const [activeModify,setActiveModify] = useState(false); //수정버튼
    const replyEvent = (idx) =>{
        setActiveReply(idx)
        // setActiveModify(false);
    }

    const modifyEvent = (idx) => {
        setActiveModify(idx);
        // setActiveComment(false)
    }

    const commentValue = (e) => {
        const comment = e.target.value;
        setActiveReply(comment)
    }

    const cancelEvent = () => {
        setActiveReply(false)
        setActiveModify(false);
    }

    return(

        <div>
        {val.reply.map((reply,replyIdx)=>{
            return(
                <Div borderbottom="1px solid #E2E8FF" padding="0 0 0 37px" key={replyIdx} justifycontent="space-between">
                {activeReply === replyIdx ? 
                    <Div>
                        <img src={reply.replyImgUrl} width="40px" alt="프로필사진" />
                        <Div flexdirection="column" alignitems="flex-start">
                            {reply.replyWriter}
                            <MainComment onChange={(e) => commentValue(e[replyIdx])} defaultValue={reply.replyContent} />
                            <Date>{reply.replyTimestamp}</Date>
                        </Div>
                        <Div>
                            <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={cancelEvent} />
                            <Button value="완료" backgroundcolor="transparent" color="mainColor" />
                        </Div>
                    </Div>
                    : 
                    <Div>
                        <img src={reply.replyImgUrl} width="40px" alt="프로필사진" />
                        <Div flexdirection="column" alignitems="flex-start">
                            {reply.replyWriter}
                            <div>{reply.replyContent}</div>
                            <Date>{reply.replyTimestamp}</Date>
                        </Div>
                        <Div>
                            <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={()=>{modifyEvent(replyIdx)}} />
                            <Button value="삭제" backgroundcolor="transparent" color="mainColor" />
                        </Div>
                    </Div>
                }
                {/* {activeReply ? 
                    <Div>
                        <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={() => setActiveReply(!activeReply)} />
                        <Button value="완료" backgroundcolor="transparent" color="mainColor" />
                    </Div>
                : 
                    <Div>
                    <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={replyEvent} />
                    <Button value="삭제" backgroundcolor="transparent" color="mainColor" />
                    </Div>
                } */}
                </Div>
                )
        })}
        </div>
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