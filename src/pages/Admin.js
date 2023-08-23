import React from "react";
import styled from "styled-components";
import Buttons from "../components/Buttons";
import Header from "../components/common/Header";
import InputField from "../components/InputField";
import { Align } from "../styled/ProjectStyle";

const Admin = () => {
    return (
        <div>
            <Header/>
            <Box>
                <Title>유저 관리</Title>
                <UserBox>
                    <div>
                        <div>유저 아이디 검색</div>
                        <InputField/>
                        <Buttons value="검색"/>
                    </div>
                    <Subject>
                        <div>아이디</div>
                        <div>닉네임</div>
                        <div>가입날짜</div>
                        <div>권한</div>
                    </Subject>
                    <div>
                        <div><input type="checkbox"></input></div>
                        <div>kjhwlgusdl</div>
                        <div>지짱</div>
                        <div>2023.08.22</div>
                        <div>일반회원</div>
                        <div><Buttons value="권한 설정"/></div>
                    </div>
                </UserBox>
            </Box>            
        </div>
    );
};

const Box = styled(Align)`
    flex-direction:column;
    border: 1px solid #e2e8ff;
    margin:30px 160px;

`
const Title = styled.div`
    background-color: #E0E6FF;
    width:100%;
    font-size:32px;
    padding:10px 0;
    color:#3185FC;
`
const UserBox = styled.div`
    width:100%;
`
const Subject = styled.div`
    display:flex;
    justify-content:space-between;
    /* width:100%; */
    margin:0 70px;

`
export default Admin;