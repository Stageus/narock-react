import React from "react";
import styled from "styled-components";
import TermsAndCondition from "../components/auth/TermsAndCondition";
import UserInfoField from "../components/auth/UserInfoField";
import Buttons from "../components/Buttons";
import Header from "../components/common/Header";
import Logo from "../components/Logo";
import { Align } from "../styled/ProjectStyle";

const Join = () => {
    //인풋 값 확인
    return (
        <div>
            <Header/>
            <Logo/>
            <FieldBox>
                <UserInfoField/>
                <TermsAndCondition/>
            </FieldBox>
            <JoinBtn>           
                <Buttons type="submit" value="회원가입" width="260px" height="34px" radius="5px"/>
            </JoinBtn> 
        </div>
    );
};

const FieldBox = styled.form`
    margin: 0 160px;
    display:flex;
    justify-content:space-between;
`

const JoinBtn = styled(Align)`
justify-content:center;
`
export default Join;