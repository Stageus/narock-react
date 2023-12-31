import React, { useState } from "react";
import axios from 'axios';
import Header from "../components/common/Header";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Align, Input, Button } from "../styled/ProjectStyle";

import { useRecoilState } from 'recoil';
import { loginState } from "../recoil/UserStates";
import { useCookies } from "react-cookie";

const Login = () => {
    const navigate = useNavigate();

    const [uid, setUid] = useState("");
    const [upw, setUpw] = useState("");

    const [auth, setAuth] = useRecoilState(loginState);
    const [cookie, setCookie] = useCookies(['token']);
    

    const loginClickEvent = async () => {
        axios.post("https://www.narock.site/account/login", {
            "idValue": uid,
            "pwValue": upw,
        },
        // {withCredentials: true}
        )
        .then(function (response) {
            if (response.data.success) {
                setAuth(true)
                navigate(-1);

            }else{
                alert("아이디 또는 비밀번호가 일치하지 않습니다.")
                console.log(response)
            }      
        }).catch(function (error) {
            console.log(error);
            alert("로그인 실패")
        }).then(function() {
            // 항상 실행
        });
    }


    return (
        <React.Fragment>
            <Header/>
            <Div> 
                <ContainerBox>
                    <Logo/>
                    <Div>
                        <InputBox>
                            <Input placeholder="아이디" maxLength="20" margin="7px 0"onChange={(e)=>setUid(e.target.value)}/>
                            <Input  placeholder="비밀번호" type="password" maxLength="16" margin="7px 0" onChange={(e)=>setUpw(e.target.value)}/>
                        </InputBox> 
                        <Button value="로그인" onClick={()=>{loginClickEvent()}} width="80px" height="80px" borderradius="5px" type="button" margin="0" marginleft="10px"/>
                    </Div>
                    <SubButtonBox>
                        <div onClick={()=>{navigate('/findAccount')}}>아이디 / 비밀번호 찾기</div>
                        <div onClick={()=>{navigate('/join')}}>회원가입</div>
                    </SubButtonBox>
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

const InputBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
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