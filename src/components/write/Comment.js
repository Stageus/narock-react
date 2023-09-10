import React from "react";
import styled from "styled-components";
import { Align, Button } from "../../styled/ProjectStyle";

const Comment = () => {
    return(
        <React.Fragment>
            <div>댓글</div>
            <AlignBox>
                <div>
                    <div>프로필사진</div>
                    <div>닉네임</div>
                    <div>댓글 내용</div>
                    <div>날짜</div>
                </div>
                <div>
                    <div>답글</div>
                    <div>수정</div>
                    <div>삭제</div>
                </div>
                <div>
                    <textarea/>
                        <Button value="등록"/>
                </div>
                <div>
                    <textarea/>
                        <Button value="등록"/>
                </div>
            </AlignBox>
        </React.Fragment>
    )
}


const AlignBox = styled(Align)`
    justify-content:space-between;
    border-bottom: 1px solid #E2E8FF;
`

export default Comment;