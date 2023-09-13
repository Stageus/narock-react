import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Align, Input, Button } from "../../styled/ProjectStyle";
import { useRecoilState, useRecoilValue } from 'recoil';
import {
//   idState,
//   passwordState,
//   passwordConfirmState,
//   nicknameState,
//   nameState,
//   emailState,
//   idMsgState,
//   passwordMsgState,
//   passwordConfirmMsgState,
//   nicknameMsgState,
//   nameMsgState,
//   emailMsgState,
//   isIdState,
//   isPasswordState,
//   isPasswordConfirmState,
//   isNicknameState,
//   isNameState,
//   isEmailState,
//   isCertificationState,
  isHoverState,
} from '../../recoil/UserStates';

const JoinInfo = () => {
    //인풋 값 확인
    // const [id, setId] = useRecoilState(idState);
    // const [password, setPassword] = useRecoilState(passwordState);
    // const [passwordConfirm, setPasswordConfirm] = useRecoilState(passwordConfirmState);
    // const [nickname, setNickname] = useRecoilState(nicknameState);
    // const [name, setName] = useRecoilState(nameState);
    // const [email, setEmail] = useRecoilState(emailState);
  
    // const [idMsg, setIdMsg] = useRecoilState(idMsgState);
    // const [passwordMsg, setPasswordMsg] = useRecoilState(passwordMsgState);
    // const [passwordConfirmMsg, setPasswordConfirmMsg] = useRecoilState(passwordConfirmMsgState);
    // const [nicknameMsg, setNicknameMsg] = useRecoilState(nicknameMsgState);
    // const [nameMsg, setNameMsg] = useRecoilState(nameMsgState);
    // const [emailMsg, setEmailMsg] = useRecoilState(emailMsgState);
  
    // const [isId, setIsId] = useRecoilState(isIdState);
    // const [isPassword, setIsPassword] = useRecoilState(isPasswordState);
    // const [isPasswordConfirm, setIsPasswordConfirm] = useRecoilState(isPasswordConfirmState);
    // const [isNickname, setIsNickname] = useRecoilState(isNicknameState);
    // const [isName, setIsName] = useRecoilState(isNameState);
    // const [isEmail, setIsEmail] = useRecoilState(isEmailState);
    // const [isCertification, setIsCertification] = useRecoilState(isCertificationState);
  
    //닉네임룰 호버
    const [isHover, setIsHover] = useRecoilState(isHoverState);
    
    // const [formData, setFormData] = useState({
    //     id: "",
    //     password: "",
    //     passwordConfirm: "",
    //     nickname: "",
    //     name: "",
    //     email: "",
    // });

    // const [messages, setMessages] = useState({
    //     idMsg: "",
    //     passwordMsg: "",
    //     passwordConfirmMsg: "",
    //     nicknameMsg: "",
    //     nameMsg: "",
    //     emailMsg: "",
    // });

    // const [validations, setValidations] = useState({
    //     isId: false,
    //     isPassword: false,
    //     isPasswordConfirm: false,
    //     isNickname: false,
    //     isName: false,
    //     isEmail: false,
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });

    //     switch (name) {
    //         case "id":
    //             // 아이디 유효성 검사 로직 추가
    //             break;
    //         case "password":
    //             // 비밀번호 유효성 검사 로직 추가
    //             break;
    //         case "passwordConfirm":
    //             // 비밀번호 확인 유효성 검사 로직 추가
    //             break;
    //         case "nickname":
    //             // 닉네임 유효성 검사 로직 추가
    //             break;
    //         case "name":
    //             // 이름 유효성 검사 로직 추가
    //             break;
    //         case "email":
    //             // 이메일 유효성 검사 로직 추가
    //             break;
    //         default:
    //             break;
    //     }
    // };

    //아이디 유효성 검사
    const onChangeId = (e)=>{
        const idRegex = /^[a-z0-9]{6,20}$/
        const idValue = e.target.value;
        setId(idValue);
        if(!idRegex.test(idValue) ){
            setIdMsg("6글자 이상 20글자 미만으로 입력해 주세요.")
            setIsId(false)
        }else{
            setIdMsg("사용 가능한 아이디입니다.")
            setIsId(true)
        }
        // 이미 사용중인 아이디 유효성 검사 추가하기 


    }

    //비밀번호 유효성 검사
    const onChangePw = (e)=>{
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
        const passwordValue = e.target.value;
        setPassword(passwordValue)
        if(!passwordRegex.test(passwordValue)){
            setPasswordMsg("영문 대소문자/숫자/특수문자 조합 8자~16자로 입력해 주세요.")
            setIsPassword(false)
        }else{
            setPasswordMsg("");
            setIsPassword(true)
        }
    }

    //비밀번호 확인 유효성 검사
    const onChangePwConfirm = (e)=>{
        const passwordConfirmValue = e.target.value;
        setPasswordConfirm(passwordConfirmValue)
        if(password === passwordConfirmValue){
            setPasswordConfirmMsg("")
            setIsPasswordConfirm(true)
        }else{
            setPasswordConfirmMsg("비밀번호가 일치하지 않습니다.");
            setIsPasswordConfirm(false)
        }
    }

    //닉네임 유효성 검사
    const onChangeNickname = (e)=>{
        const nickNameValue = e.target.value;
        const nickNameRegex = /^[a-zA-Z0-9가-힣!@#$%^&*()_+{}|:"<>?~-]{2,16}$/;
        setNickname(nickNameValue)
        if(!nickNameRegex.test(nickNameValue)){
            setNicknameMsg("");
            setIsNickname(false)
        }else{
            setNicknameMsg("");
            setIsNickname(true);
        }
    }

    //이름 유효성 검사
    const onChangeName = (e)=>{
        const nameValue = e.target.value;
        const nameRegex =  /^[가-힣a-zA-Z]{1,20}$/;

        setName(nameValue);
        
        if(!nameRegex.test(nameValue)){
            setNameMsg("한글 영문 대/소문자를 사용해 주세요.")
            setIsName(false)
        }else{
            setNameMsg("")
            setIsName(true)
        }
    }

    //이메일 유효성 검사
    const onChangeEmail =(e)=>{
        const emailValue = e.target.value;
        const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        setEmail(emailValue);
        
        if(!emailRegex.test(emailValue)){
            setEmailMsg("유효한 이메일을 작성해 주세요.")
            setIsEmail(false)
        }else{
            setEmailMsg("")
            setIsEmail(true)
        }
    }


    return (
        <div> 
            <div>
                <div>아이디 (영문소문자/숫자, 6~20자만 가능)</div>
                <Align>
                    <Input id="uid" onChange={onChangeId} maxlength="20" marginright="10px"/>
                    {isId ? <Success>{idMsg}</Success> : id.length === 0 ? null : <Error>{idMsg}</Error>}
                </Align>
            </div>
            <div>
                    <div>비밀번호 (영문 대소문자/숫자/특수문자 조합, 8자~16자만 가능)</div>
                <Align>
                    <Input id="upw" onChange={onChangePw} type="password" maxlength="16" marginright="10px"/>
                    {!isPassword && password.length > 0 && <Error>{passwordMsg}</Error>}
                </Align>
            </div>

            <div>
                <div>
                    <div>비밀번호 확인</div>
                </div>
                <Align>
                    <Input id="upwConfirm"onChange={onChangePwConfirm} type="password" marginright="10px"/>
                    {passwordConfirm.length> 0 && <Error>{passwordConfirmMsg}</Error>}
                </Align>
            </div>
                
            <div>
                <div>닉네임</div>
                <Align>
                    <Input id="unickname" OnChange={onChangeNickname} maxlength="16" marginright="10px"/>
                    {nickname.length> 0 &&<Error>{nicknameMsg}</Error>}
                </Align>
                <div>
                    <RuleIcon onMouseOver={()=>{setIsHover(true)}} onMouseOut={()=>{setIsHover(false)}}>?</RuleIcon>
                    {isHover &&
                    <Rule>16자까지, 허용공백 문자 & 보안상 문제되는 특수문자는 발견시 제외처리 <br/>
                    어법에 맞지 않는 한글(쐥,뛩.. 등등) 사용 <br/>
                    금지불량 닉네임(욕설, 불건전 닉네임)은 임의 삭제 혹은 계정 징계 조치 <br/>
                    </Rule>
                    }
                </div>
            </div>

            <div>
                <div>이름</div>
                <Align>
                    <Input id="uname"onChange={onChangeName} maxlength="20" marginright="10px"/>
                    {name.length> 0 &&<Error>{nameMsg}</Error>}
                </Align>
            </div>
            <div>
                <div>이메일</div>
                <Align>
                    <Input id="uemail" onChange={onChangeEmail} marginright="10px"/>
                    {email.length> 0 &&<Error>{emailMsg}</Error>}
                </Align>
            </div>
            <div>
                <div>인증번호</div>
                <Certification>
                    <Input id="certification"/>
                    <Button value="인증코드 발송" padding="0px 15px" radius="5px" height="32px"></Button>
                </Certification>
            </div>
            {/* {password.length> 0 &&
            <div>{passwordMsg}</div>
            }        */}
        </div>
    );
};

const Success = styled.span`
    color:#3185FC;
`
const Error = styled.span`
    color:#FC3131;
`
const RuleIcon = styled(Align)`
    border-radius:20px;
    background-color: #3185FC;
    color:#fff;
    width:14px;
    height:14px;
    justify-content:center;
    position:relative;
    top: -38px;
    left:240px;
    cursor:help;
`

const Rule = styled.div`
    width:313px;
    padding:15px 10px;
    border: 1px solid #3185FC;
    font-size:10px;
    position:absolute;
    background-color:#fff;
    top: 461px;
    left:427px;
    color:#222A68;
`


const Certification = styled.div`
    display:flex;
    align-items:center;
`

export default JoinInfo;