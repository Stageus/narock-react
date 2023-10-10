import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Logo from "../components/Logo";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Align, Input, Button } from "../styled/ProjectStyle";

const Login = () => {
    const navigate = useNavigate();
    const [uid, setUid] = useState("");
    const [upw, setUpw] = useState("");
    const [cookie, setCookie] = useCookies(['id']);



    const loginClickEvent = async () => {

    //     const response = await fetch("https://www.narock.site/account/login",{
    //     "method": "POST",
    //     "headers": {
    //         "Content-Type": "application/json",
    //     },
    //     "credentials": "include",
    //     "body":JSON.stringify({
    //         "idValue": uid,
	// 	    "pwValue": upw
    //     })
    // })
    //     const result = await response.json()
        
    //     if(result.success){
    //         alert("로그인 되었습니다.")
    //         // navigate('/')
    //         const token = result.token
    //         localStorage.setItem("token",result.token);
    //         console.log(token)
    //     }
    //     if(uid === "" || upw === ""){
    //         alert('아이디 또는 비밀번호를 확인해 주세요.')
    //     }
        // else{
        //     alert("로그인 정보가 일치하지 않습니다.")
        // }
        // if(정보 없거나 비밀번호 일치하지 않을 시){
        //     alert("가입 된 정보가 없거나 비밀번호가 일치하지 않습니다.")
        // }

        axios.post("https://www.narock.site/account/login", { // 로그인 요청
                "idValue": uid,
                "pwValue": upw
			},
            { withCredentials: true }
            )
			.then((res) => {
                console.log(res);
			}).catch(error=>{
                console.log(error)
            })
    }


    return (
        <React.Fragment>
            <Header/>
            <Div> 
                <ContainerBox>
                    <Logo/>
                    <Div>
                        <InputBox>
                            <Input placeholder="아이디" maxlength="20" margin="7px 0"onChange={(e)=>setUid(e.target.value)}/>
                            <Input  placeholder="비밀번호" type="password" maxlength="16" margin="7px 0" onChange={(e)=>setUpw(e.target.value)}/>
                        </InputBox> 
                        <Button value="로그인" onClick={()=>{loginClickEvent()}} width="80px" height="80px" borderradius="5px" type="button" margin="0" marginleft="10px"/>
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