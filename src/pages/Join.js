import React, { useState } from "react";
import styled from "styled-components";
import TermsAndCondition from "../components/auth/TermsAndCondition";
import JoinInfo from "../components/auth/JoinInfo";
import Header from "../components/common/Header";
import Logo from "../components/Logo";
import { Align, Button } from "../styled/ProjectStyle";

const Join = () => {

    const [userData, setUserData] = useState({
        id:"",
        isId:"",
        password:"",
        isPassword:"",
        nickname: "",
        isNickname: "",        
        name: "",
        isName:"",
        email: "",
        isEmail:"",
        verificationCode: "",
        isTermsandcondition:""
    });

    const handleUserDataChange = (field, value) => {
        setUserData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleJoinButtonClick = () => {
        // if(!userData.id || !userData.password || !userData.nickname || !userData.name || !userData.email){
        //     alert("모든 칸을 입력해 주세요.")
        //     return;
        // }
        if(!userData.isId || !userData.isPassword || !userData.isNickname || !userData.isName || !userData.isEmail){
            alert("모든 칸을 입력해 주세요.")
            console.log("User Data:",userData)
            return;
        }

        if(!userData.isTermsandcondition){
            alert("이용 약관에 동의해 주세요.")
            return;
        }

        console.log("User Data:", userData);
        alert("가입을 축하합니다!");
    };


    return (
        <div>
            <Header/>
            <Logo/>
            <FieldBox>
                <JoinInfo onDataChange={handleUserDataChange}/>
                <TermsAndCondition onDataChange={handleUserDataChange}/>
            </FieldBox>
            <JoinBtn>           
                <Button type="submit" value="회원가입" width="260px" height="34px" borderradius="5px" onClick={handleJoinButtonClick}/>
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