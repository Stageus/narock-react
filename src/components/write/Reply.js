import axios from "axios";
import React, {useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { afterModifyCommentState } from "../../recoil/BackRecoil";
import { Button, Div } from "../../styled/ProjectStyle";

const Reply = (props) => {
    const { reply, replyModify, replyDelete } = props;
    const [afterModifyComment,setAfterModifyComment] = useRecoilState(afterModifyCommentState)
    const [activeModify,setActiveModify] = useState(false); //수정버튼

    const toggleModifyEvent = (idx) => {
        setActiveModify(idx);
    }

    const commentValue = (e) => {
        const comment = e.target.value;
        setAfterModifyComment(comment)
    }

    const cancelEvent = () => {
        setActiveModify(false);
    }
    const replyModifyEvent = (idx) => {
        replyModify(idx)
        setActiveModify(false);
        console.log(idx)
    }
    const replyDeleteEvent = (idx) => {
        replyDelete(idx)
        console.log(idx)
    }

    return(

        <Div width="100%" flexdirection="column">
            {reply.map((v,i)=>{
                return(
                <Div borderbottom="1px solid #E2E8FF" key={i} width="100%">
                    {activeModify === v.replyindex ? 
                        <Div width="100%" justifycontent="space-between" margin="10px 50px">
                            <Div>
                                <Div>
                                    <img src={v.userprofileimg} width="40px" alt="프로필사진" />
                                    <Div flexdirection="column" alignitems="flex-start" margin="0 0 0 10px">
                                        {v.usernickname}
                                        <MainComment onChange={(e) => commentValue(e)} defaultValue={v.replycontent} />
                                        <Date>{v.replytimestamp.substring(0,10)} {v.replytimestamp.substring(11,16)}</Date>
                                    </Div>
                                </Div>
                            </Div>
                            <Div>
                                <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={cancelEvent} />
                                <Button value="완료" backgroundcolor="transparent" color="mainColor" onClick={()=>{replyModifyEvent(v.replyindex)}}/>
                            </Div>
                        </Div>
                        : 
                            <Div width="95%" justifycontent="space-between" margin="10px 50px">
                                <Div>
                                    <Div>
                                        <ProfileImg src={v.userprofileimg} width="40px" alt="프로필사진" />
                                        <Div flexdirection="column" alignitems="flex-start" justifycontent="space-between" margin="0 0 0 10px">
                                            {v.usernickname}
                                            <div>{v.replycontent}</div>
                                            <Date>{v.replytimestamp.substring(0,10)} {v.replytimestamp.substring(11,16)}</Date>
                                        </Div>
                                    </Div>
                                </Div>
                                    <Div>
                                        <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={()=>{toggleModifyEvent(v.replyindex)}} />
                                        <Button value="삭제" backgroundcolor="transparent" color="mainColor" onClick={()=>{replyDeleteEvent(v.replyindex)}} />
                                    </Div>
                            </Div>
                    }
                </Div>
                )
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

const ProfileImg = styled.img`
    border-radius: 30px;
    width:40px;
    height:40px;
    margin-right:10px;
`


export default Reply;