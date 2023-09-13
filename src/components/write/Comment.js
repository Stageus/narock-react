import React from "react";
import styled from "styled-components";
import { Align, Button, Div } from "../../styled/ProjectStyle";

const Comment = () => {
    return(
        <React.Fragment>
            <div>댓글</div>
            <AlignBox>
                <Div>
                    <img src="/img/avatar.png" width="40px" alt="프로필사진"/>
                    <CommentAlign>
                        <div>닉네임</div>
                        <div>댓글 내용</div>
                        <div>날짜</div>
                    </CommentAlign>
                </Div>
                <Div>
                    <Button value="답글" backgroundcolor="transparent" color="mainColor"></Button>
                    <Button value="수정" backgroundcolor="transparent" color="mainColor"></Button>
                    <Button value="삭제" backgroundcolor="transparent" color="mainColor"></Button>
                </Div>
            </AlignBox>
                <Div position="relative">
                    <TextArea/>
                    <SubmitButton value="등록"/>
                </Div>
                <Div>
                    <TextArea />
                    <SubmitButton value="등록"/>
                </Div>
        </React.Fragment>
    )
}


const AlignBox = styled(Align)`
    justify-content:space-between;
    border-bottom: 1px solid #E2E8FF;
`

const CommentAlign = styled(Align)`
    flex-direction:column;
`
const TextArea = styled.textarea`
    width:1005px;
    height:81px;
    resize:none;
    border: 1px solid #ADBDFF;
`

const SubmitButton = styled(Button)`
    position:absolute;
    right:0;
    bottom:0;

`
export default Comment;