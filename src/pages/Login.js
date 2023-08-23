import React, { useState } from "react";
import Header from "../components/common/Header";
import Logo from "../components/Logo";
import InputField from "../components/InputField";
import Buttons from "../components/Buttons";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Align } from "../styled/ProjectStyle";

const Login = () => {
    const navigate = useNavigate();
    const [uid, setUid] = useState("");
    const [upw, setUpw] = useState("");

    const loginClickEvent = () => {
        if(uid === "" || upw === ""){
            alert('아이디 또는 비밀번호를 확인해 주세요.')
        }
        // if(정보 없거나 비밀번호 일치하지 않을 시){
        //     alert("가입 된 정보가 없거나 비밀번호가 일치하지 않습니다.")
        // }
    }


    return (
        <React.Fragment>
            <Header/>
            <Div>
                <ContainerBox>
                    <Logo/>
                    <Div>
                        <div>
                            <InputField placeholder="아이디" maxlength="20" onChange={(e)=>setUid(e.target.value)}/>
                            <InputField placeholder="비밀번호" type="password" maxlength="16" onChange={(e)=>setUpw(e.target.value)}/>
                        </div> 
                        <Buttons value="로그인" onClick={()=>{loginClickEvent()}} width="80px" height="80px" radius="5px" type="button" margin="0" marginleft="10px"/>
                    </Div>
                    <SubButtonBox>
                        <div onClick={()=>{navigate('/findAccount')}}>아이디 / 비밀번호 찾기</div>
                        <div onClick={()=>{navigate('/join')}}>회원가입</div>
                    </SubButtonBox>
                    <SnsLogin src="/img/kakaoLogin.png" alt="kakao"></SnsLogin>
                </ContainerBox>
            </Div>
        </React.Fragment>
     )
}

const ContainerBox = styled(Align)`
    margin-top:260px;
    align-items:center;
    flex-direction:column;
    width:fit-content;
`
const Div = styled(Align)`
    justify-content:center;
`
const SubButtonBox = styled(Align)`
    justify-content:space-between;
    width:100%;
    color:#3185FC;
    cursor:pointer;
`
const SnsLogin = styled.img`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    margin-top:10px;
    cursor:pointer;
`
export default Login;