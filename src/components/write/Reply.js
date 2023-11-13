import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { Button, Div } from "../../styled/ProjectStyle";

const Reply = (props) => {
    const { reply,commentUserIndex } = props;
    console.log("코멘트인덱스",commentUserIndex)

    const [activeReply,setActiveReply] = useState(false); //대댓
    const [afterModifyComment,setAfterModifyComment] = useState('');
    const [activeModify,setActiveModify] = useState(false); //수정버튼

    console.log(activeModify)
    const toggleModifyEvent = (idx) => {
        setActiveModify(idx);
        setActiveReply(false)
        console.log("대댓인덱스",idx)
    }

    const commentValue = (e) => {
        const comment = e.target.value;
        setAfterModifyComment(comment)
        setActiveReply(false)
    }

    const cancelEvent = () => {
        setActiveReply(false)
        setActiveModify(false);
    }
    const commentModifyEvent = (idx) => {
        axios.put("comment", {
            "isReply": true,
		    "commentOrReplyIndex": idx,
		    "commentContent": afterModifyComment,
        })
        .then(function (response) {
            console.log(response)
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    }
    const commentDeleteEvent = (idx) => {
        if (window.confirm("댓글을 삭제하시겠습니까?")) {
            axios
                .delete('/comment', {
                    data: {
                        "isReply": true,
                        "commentOrReplyIndex": idx,
                    }
                })
                .then(function (response) {
                    alert("댓글이 삭제 되었습니다.");
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert("삭제가 취소되었습니다.");
        }
    }

    return(

        <Div width="100%" flexdirection="column">
            {reply.map((v,i)=>(
                <Div borderbottom="1px solid #E2E8FF" key={i} width="100%">
                    {activeModify === v.replyindex ? 
                        <Div width="100%" justifycontent="space-between" margin="10px 50px">
                            <Div>
                                <Div>
                                    <img src={v.replyImgUrl} width="40px" alt="프로필사진" />
                                    <Div flexdirection="column" alignitems="flex-start" margin="0 0 0 10px">
                                        {v.usernickname}
                                        <MainComment onChange={(e) => commentValue(e)} defaultValue={v.replycontent} />
                                        <Date>{v.replytimestamp.substring(0,10)} {v.replytimestamp.substring(11,16)}</Date>
                                    </Div>
                                </Div>
                            </Div>
                            <Div>
                                <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={cancelEvent} />
                                <Button value="완료" backgroundcolor="transparent" color="mainColor" onClick={()=>commentModifyEvent(v.replyindex)}/>
                            </Div>
                        </Div>
                        : 
                            <Div width="95%" justifycontent="space-between" margin="10px 50px">
                                <Div>
                                    <Div>
                                        <img src={v.replyImgUrl} width="40px" alt="프로필사진" />
                                        <Div flexdirection="column" alignitems="flex-start" justifycontent="space-between" margin="0 0 0 10px">
                                            {v.usernickname}
                                            <div>{v.replycontent}</div>
                                            <Date>{v.replytimestamp.substring(0,10)} {v.replytimestamp.substring(11,16)}</Date>
                                        </Div>
                                    </Div>
                                </Div>
                                {v.userindex === commentUserIndex ?
                                    <Div>
                                        <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={()=>{toggleModifyEvent(v.replyindex)}} />
                                        <Button value="삭제" backgroundcolor="transparent" color="mainColor" onClick={()=>{commentDeleteEvent(v.replyindex)}} />
                                    </Div>
                                    :
                                    <div>none</div>
                                }
                            </Div>
                    }
                </Div>
            ))}
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