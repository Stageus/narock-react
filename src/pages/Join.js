import React, { useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import TermsAndCondition from "../components/auth/TermsAndCondition";
import JoinInfo from "../components/auth/JoinInfo";
import Header from "../components/common/Header";
import Logo from "../components/Logo";
import { Align, Button } from "../styled/ProjectStyle";
import { useRecoilValue } from 'recoil';
import { registState,errorState } from "../recoil/UserStates";

const Join = () => {
    const regist = useRecoilValue(registState)
    const isError = useRecoilValue(errorState)


    const handleJoinButtonClick = () => {
        if(regist.id.length * regist.password.length * regist.confirmPassword.length * regist.nickname.length * regist.name.length * regist.email.length * regist.certification.length === 0){
            alert("모든 칸을 입력해 주세요.")
            // console.log("User Data:",userData)
            return;
        }
        if(!isError.isId){
            alert("아이디를 체크해 주세요.")
            return;
        }
        if(!isError.isPassword){
            alert("비밀번호를 체크 해 주세요.")
            return;
        }
        if(!isError.isConfirmPassword){
            alert("비밀번호가 맞지 않습니다.")
            return;
        }
        if(!isError.isNickname){
            alert("닉네임을 체크해 주세요.")
            return;
        }
        if(!isError.isName){
            alert("이름을 체크해 주세요.")
            return;
        }


        if(!regist.isTermsandcondition){
            alert("이용 약관에 동의해 주세요.")
            return;
        }

        console.log("User Data:", regist);
        alert("가입을 축하합니다!");

    const apiUrl = '3.35.171.221';

    const requestData = {
      idValue: regist.id,
      pwValue: regist.password,
      nicknameValue: regist.nickname,
      nameValue: regist.name,
      emailValue: regist.email
    };

    axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      // 요청 성공
      console.log('API 응답:', response.data);
    })
    .catch((error) => {
      // 요청 실패
      console.error('API 요청 실패:', error);
    });
    };


    return (
        <div>
            <Header/>
            <Logo/>
            <FieldBox>
                <JoinInfo/>
                <TermsAndCondition/>
            </FieldBox>
            <JoinBtn>           
                <Button type="submit" value="회원가입" width="260px" height="34px" borderradius="5px" onClick={handleJoinButtonClick}/> 
                {/* recoil로 값 가져오기 */}
            </JoinBtn> 
        </div>
    );
};

const FieldBox = styled.form`
    margin: 0 160px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const JoinBtn = styled(Align)`
justify-content:center;
`
export default Join;