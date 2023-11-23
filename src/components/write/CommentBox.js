import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import Reply from "./Reply";
import { Button, Div } from "../../styled/ProjectStyle";
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginState } from "../../recoil/UserStates";
import { afterModifyCommentState, commentState, replyContentState, replyIndexState, replyState } from "../../recoil/BackRecoil";
import axios from "axios";

const CommentBox = (props) => {
    const { postId } = props;
    const [commentInput, setCommentInput] = useState('');

    const auth = useRecoilValue(loginState);
    // const comment = useRecoilValue(commentState);
    const [comment,setComment] = useRecoilState(commentState);
    const [reply,setReply] = useRecoilState(replyState);
    const replyContent = useRecoilValue(replyContentState)
    const afterModifyComment = useRecoilValue(afterModifyCommentState)

    const commentInputChange = (e) => {
        const data = e.target.value;
            setCommentInput(data);
    }

    //댓글 등록 이벤트
    const commentSubmitEvent = () => {
        if(commentInput.length === 0){
            alert('댓글을 입력해 주세요.')
            return;
        }

        axios.post("https://www.narock.site/comment", {
            "isReply": false,
            "postOrCommentIndex": postId,
            "commentContent": commentInput
        },
        )
        .then(function (response) {
            if (response.data.success) {
                alert("댓글이 등록 되었습니다.")
                commentData();
            }else{
                console.log(response)
            }      
        }).catch(function (error) {
            console.log(error);
        })
    }

    //댓글 삭제 이벤트
    const commentDeleteEvent = (idx) => {
        if (window.confirm("댓글을 삭제하시겠습니까?")) {
            axios
                .delete('/comment', {
                    data: {
                        "isReply": false,
                        "commentOrReplyIndex": idx,
                    }
                })
                .then(function (response) {
                    if(response.data.success){
                        alert("댓글이 삭제 되었습니다.");
                        commentData();
                    }else{
                        alert("댓글 삭제에 실패했습니다.")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert("삭제가 취소되었습니다.");
        }
    }

    //댓글 수정 이벤트
    const commentModifyEvent = (idx) => {
        axios.put("comment", {
            "isReply": false,
		    "commentOrReplyIndex": idx,
		    "commentContent": afterModifyComment,
        })
        .then(function (response) {
            commentData();
        })
    }

    //대댓 등록 이벤트
    const replySubmitEvent = (idx) => {
        axios.post("https://www.narock.site/comment", {
            "isReply": true,
            "postOrCommentIndex": idx,
            "commentContent": replyContent
        },
        )
        .then(function (response) {
            if (response.data.success) {
                alert("댓글이 등록 되었습니다.")
                commentData()
            }else{

                console.log(response)
            }      
        }).catch(function (error) {
            console.log(error);
            // alert("로그인 실패")
        })
    }

    //대댓 수정 이벤트
    const replyModifyEvent = (idx) => {
        axios.put("comment", {
            "isReply": true,
		    "commentOrReplyIndex": idx,
		    "commentContent": afterModifyComment,
        })
        .then(function (response) {
            alert("댓글이 수정되었습니다.")
            commentData();
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    }

    //대댓 삭제 이벤트
    const replyDeleteEvent = (idx) => {
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
                    commentData();
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert("삭제가 취소되었습니다.");
        }
    }



    const commentData = () => {
            axios.get("https://www.narock.site/post",
            {
                params:{
                    postIndex:postId,
                }
            }
            )
            .then(function (response) {
                // const sortedComment = response.data.comment.sort((a,b)=> {return a.commentindex - b.commentindex})
                // setComment(sortedComment);
                setComment(response.data.comment)
                setReply(response.data.reply)
                console.log(reply)
                console.log(comment)
            }).catch(function (error) {
                console.log(error)
            })
    }

    return(
        <Div padding="20px" border="1px solid #e2e8ff" display="block">
            <Div margin="0 0 10px 0">댓글</Div>
            
        <Div display="block">
            {auth === false ? 
            <Div>   
                <SubCommentInput defaultValue="로그인 후 이용 가능합니다." disabled></SubCommentInput>
            </Div>
            :
            <Div>   
                <SubCommentInput onChange={e=>commentInputChange(e)}></SubCommentInput>
                <SubmitButton value="등록" onClick={commentSubmitEvent}/>
            </Div>
            }
        </Div>
            <div>
                {
                comment ? comment.map((arr, i) => (
                    <div key={i}>
                        {arr.slice().sort((a,b)=>{return a.commentindex - b.commentindex}).map((v, j) => (
                            <div key={v.commentindex}>
                                <Comment comment={v} postid={postId} /* reply={reply[j].length} */
                                replySubmitEvent={()=>{replySubmitEvent(v.commentindex)}}
                                commentDeleteEvent={()=>{commentDeleteEvent(v.commentindex)}}
                                commentModifyEvent={()=>{commentModifyEvent(v.commentindex)}}
                                />
                                {reply[j].length < 2 && 
                                    <Reply reply={reply[j]} 
                                    commentIdx={v.commentindex} 
                                    commentUserIndex={v.userindex}
                                    replyModify={replyModifyEvent}
                                    replyDelete={replyDeleteEvent}
                                    postId={postId}
                                    />
                                }
                            </div>
                        ))}
                    </div>
                )) : <div>등록된 댓글이 없습니다.</div>}
            </div>
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