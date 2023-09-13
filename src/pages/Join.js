import React, { useState } from "react";
import styled from "styled-components";
import TermsAndCondition from "../components/auth/TermsAndCondition";
import JoinInfo from "../components/auth/JoinInfo";
import Header from "../components/common/Header";
import Logo from "../components/Logo";
import { Align, Button } from "../styled/ProjectStyle";
import { useRecoilValue } from 'recoil';
import { idState, registState } from "../recoil/UserStates";

const Join = () => {
    const uid = useRecoilValue(idState)
    const regist = useRecoilValue(registState)
    // console.log(uid)
    // const [userData, setUserData] = useState({
    //     id:"",
    //     isId:"",
    //     password:"",
    //     isPassword:"",
    //     nickname: "",
    //     isNickname: "",        
    //     name: "",
    //     isName:"",
    //     email: "",
    //     isEmail:"",
    //     verificationCode: "",
    //     isTermsandcondition:""
    // });

    // const handleUserDataChange = (field, value) => {
    //     setUserData((prevData) => ({
    //         ...prevData,
    //         [field]: value
    //     }));
    // };

    const handleJoinButtonClick = () => {
        if(regist.length === 0){
            alert("모든 칸을 입력해 주세요.")
            // console.log("User Data:",userData)
            return;
        }

        // if(!userData.isTermsandcondition){
        //     alert("이용 약관에 동의해 주세요.")
        //     return;
        // }

        console.log("User Data:", regist);
        alert("가입을 축하합니다!");
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
`

const JoinBtn = styled(Align)`
justify-content:center;
`
export default Join;