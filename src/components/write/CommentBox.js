import React, { useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import Reply from "./Reply";
import { Button, Div } from "../../styled/ProjectStyle";
import { useRecoilValue } from 'recoil';
import { loginState } from "../../recoil/UserStates";
import { commentState, replyState } from "../../recoil/BackRecoil";
import axios from "axios";
const CommentBox = (props) => {
    const { postId } = props;
    const [commentInput, setCommentInput] = useState('');

    const auth = useRecoilValue(loginState);
    const comment = useRecoilValue(commentState);
    const reply = useRecoilValue(replyState);
    console.log(comment)
    console.log(reply)

    const commentInputChange = (e) => {
        const data = e.target.value;
        // console.log(data)
        setCommentInput(data);
    }
    const commentSubmitEvent = async () => {
        axios.post("https://www.narock.site/comment", {
            "isReply": false,
            "postOrCommentIndex": postId,
            "commentContent": commentInput
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
        })
    }
    // }
    return(
        <Div padding="20px" margin="0" border="1px solid #e2e8ff" display="block">
            <div>댓글</div>
            
        <Div display="block" margin="0">
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
                        {arr.map((v, j) => (
                            <div key={j}>
                                <Comment comment={v} reply={reply[j].length}/>
                                {reply[j].length < 2 &&
                                    <Reply reply={reply[j]} commentIdx={v.commentindex} commentUserIndex={v.userindex}/>
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