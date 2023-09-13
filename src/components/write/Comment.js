import React from "react";
import styled from "styled-components";
import { Align, Button, Div } from "../../styled/ProjectStyle";

const Comment = () => {
    return(
        <React.Fragment>
            <div>댓글</div>
            <AlignBox>
                <Div>
                    <img src="/img/avatar.png" width="40px"/>
                    <CommentAlign>
                        <div>닉네임</div>
                        <div>댓글 내용</div>
                        <div>날짜</div>
                    </CommentAlign>
                </Div>
                <Div>
                    <div>답글</div>
                    <div>수정</div>
                    <div>삭제</div>
                </Div>
            </AlignBox>
                <div>
                    <textarea/>
                        <Button value="등록"/>
                </div>
                <div>
                    <textarea/>
                        <Button value="등록"/>
                </div>
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

export default Comment;