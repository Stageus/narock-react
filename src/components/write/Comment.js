import React, { useState }  from "react";
import styled from "styled-components";
import { Div,Button } from "../../styled/ProjectStyle";
import axios from "axios";

const Comment = (props) => {

    const { comment } = props;
    
    // console.log(comment)
    const [activeComment,setActiveComment] = useState(false); //답글버튼
    const [activeModify,setActiveModify] = useState(''); //수정버튼
    const [afterModifyComment,setAfterModifyComment] = useState(''); //수정한 댓글
    const [replyContent, setReplyContent] = useState('');    

    const toggleCommentEvent = (idx) =>{
        setActiveComment(idx)
        setActiveModify(false);
    }

    const toggleModifyEvent = (idx) => {
        setActiveModify(idx);
        setActiveComment(false)
        console.log(activeModify)
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

    const commentModifyEvent = () => {
        axios.put("comment", {
            "isReply": false,
		    "commentOrReplyIndex": comment.commentindex,
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

    const commentDeleteEvent = () => {
        if (window.confirm("댓글을 삭제하시겠습니까?")) {
            axios
                .delete('/comment', {
                    data: {
                        "isReply": false,
                        "commentOrReplyIndex": comment.commentindex,
                    }
                })
                .then(function (response) {
                    alert("댓글이 삭제 되었습니다.");
                    console.log(response)
                    console.log(comment.commentindex)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert("삭제가 취소되었습니다.");
        }
    }
    const replySubmitEvent = async () => {
        axios.post("https://www.narock.site/comment", {
            "isReply": true,
            "postOrCommentIndex": comment.commentindex,
            "commentContent": replyContent
        },
        // {withCredentials: true}
        )
        .then(function (response) {
            if (response.data.success) {
                console.log(response)
                alert("댓글이 등록 되었습니다.")
            }else{

                console.log(response)
            }      
        }).catch(function (error) {
            console.log(error);
            // alert("로그인 실패")
        })
    }


    return(
        <Div borderbottom="1px solid #E2E8FF" justifycontent="space-between">
            {activeComment === comment.commentindex ? 
                // 답글 버튼 눌렀을 때
                <Div flexdirection="column" alignitems="normal" width="100%" >
                    <Div justifycontent="space-between">
                        <Div>
                            <img src="/img/avatar.png" width="40px" alt="프로필사진" />
                            <Div flexdirection="column" alignitems="flex-start" margin="0 0 0 10px">
                                {comment.usernickname}
                                <div>{comment.commentcontent}</div>
                                <Date>{comment.commenttimestamp.substring(0,10)} {comment.commenttimestamp.substring(11,16)}</Date>
                            </Div>
                        </Div>
                        <Div>
                            <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={toggleCancelEvent} />
                            <Button value="완료" backgroundcolor="transparent" color="mainColor" />
                        </Div>
                    </Div>
                    <div>   
                        <SubCommentInput onChange={e=>setReplyContent(e.target.value)}></SubCommentInput>
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
                                    <img src="/img/avatar.png" width="40px" alt="프로필사진" />
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
                // 기본값
                <Div flexdirection="column" width="100%">
                    <Div width="100%" >
                        <Div width="100%" justifycontent="space-between" margin="10px">
                            <Div>
                                <img src="/img/avatar.png" width="40px" alt="프로필사진" />
                                <Div flexdirection="column" alignitems="flex-start" margin="0 0 0 10px">
                                    <div>{comment.usernickname}</div>
                                    <div>{comment.commentcontent}</div>
                                    <Date>{comment.commenttimestamp.substring(0,10)} {comment.commenttimestamp.substring(11,16)}</Date>
                                    {/* <Date>{comment.commenttimestamp} {comment.commenttimestamp}</Date> */}
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
export default Comment;