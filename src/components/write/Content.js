import React from "react";
import styled from 'styled-components';
import { Align } from "../../styled/ProjectStyle";
import Buttons from '../Buttons';
const Content = () => {
    return (
        <div>
            <Box>
                <div>공지사항</div>
                <div>공지사항입니다. (제목)</div>
                <Align>
                    <ContentAlign>
                        <div>프로필사진</div>
                        <div>닉네임</div>
                        <div>조회수</div>
                        <div>날짜</div>
                        <div>댓글 갯수</div>
                    </ContentAlign>
                    <div>
                        <Buttons value="수정"/>
                        <Buttons value="삭제"/>
                        <Buttons value="목록"/>
                    </div>
                </Align>
                <div>내용 어쩌고저쩌고</div>
            </Box>
        </div>
    );
};

const Box = styled.div`
display:flex;
margin: 0 80px;
border: 1px solid #000;
padding:20px;
flex-direction:column;
`
const ContentAlign = styled(Align)`

`

export default Content;