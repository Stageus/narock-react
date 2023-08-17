import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Align,Button } from "../../styled/ProjectStyle";
import Buttons from "../Buttons";
import InputField from "../InputField";

const UserInfoField = () => {
    //인풋 값 확인
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [nickname, setNickname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");

    //오류메세지
    const [idMsg,setIdMsg] = useState("");
    const [passwordMsg,setPasswordMsg] = useState("");
    const [passwordConfirmMsg,setPasswordConfirmMsg] = useState("");
    const [nicknameMsg,setNicknameMsg] = useState("");
    const [nameMsg,setNamelMsg] = useState("");
    const [emailMsg,setEmailMsg] = useState("");

    //유효성 검사
    const [isId,setIsId] = useState(false);
    const [isPassword,setIsPassword] = useState(false);
    const [isPasswordConfirm,setIsPasswordConfirm] = useState(false);
    const [isNickname,setIsNickname] = useState(false);
    const [isName,setIsName] = useState(false);
    const [isEmail,setIsEmail] = useState(false);

    //닉네임룰 호버
    const [isHover,setIsHover] = useState(false);

    //아이디 유효성 검사
    const onChangeId = useCallback((e)=>{
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
    },[])

        //비밀번호 유효성 검사
        const onChangePw = useCallback((e)=>{
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
        },[])


        //비밀번호 확인 유효성 검사
        const onChangePwConfirm = useCallback((e)=>{
            const passwordConfirmValue = e.target.value;
            setPasswordConfirm(passwordConfirmValue)
            if(password === passwordConfirmValue){
                setPasswordConfirmMsg("")
                setIsPasswordConfirm(true)
            }else{
                setPasswordConfirmMsg("비밀번호가 일치하지 않습니다.");
                setIsPasswordConfirm(false)
            }
        },[password])


        //닉네임 유효성 검사
        const onChangeNickname = useCallback((e)=>{
            const nickNameValue = e.target.value;
            setNickname(nickNameValue)
            // if(사용가능한닉네임){
            //     setNicknameMsg("닉네임은 16자");
            // }else if(중복닉네임){
            //     setNicknameMsg("닉네임은 16자");
            // }
        },[])


        const onChangeName = useCallback((e)=>{
            const nameValue = e.target.value;
            const nameRegex =  /^[가-힣a-zA-Z]{1,20}$/;

            setName(nameValue);
            
            if(!nameRegex.test(nameValue)){
                setNamelMsg("한글 영문 대/소문자를 사용해 주세요.")
                setIsName(false)
            }else{
                setNamelMsg("")
                setIsName(true)
            }
        },[])
    return (
        <div>
                <div>
                    <div>아이디 (영문소문자/숫자, 6~20자만 가능)</div>
                    <InputField onChange={onChangeId} maxlength="20" />
                </div>
                {isId ? <Success>{idMsg}</Success> : id.length === 0 ? null : <Error>{idMsg}</Error>
                }
                <div>
                    <div>비밀번호 (영문 대소문자/숫자/특수문자 조합, 8자~16자만 가능)</div>
                    <InputField onChange={onChangePw} type="password" maxlength="16" />
                </div>
                {
                !isPassword && password.length > 0 && <Error>{passwordMsg}</Error>
                }
                <div>
                    <div>비밀번호 확인</div>
                    <InputField onChange={onChangePwConfirm} type="password"/>
                </div>
                {passwordConfirm.length> 0 &&
                <Error>{passwordConfirmMsg}</Error>
                }
                <div>
                    <div>닉네임</div>
                    <InputField onChange={onChangeNickname} maxlength="16"/>
                    <div>
                        <RuleIcon onMouseOver={()=>{setIsHover(true)}} onMouseOut={()=>{setIsHover(false)}}>?</RuleIcon>
                        {isHover &&
                        <Rule>16자까지, 닉네임 앞뒤로 공백 불가, 단어 사이 공백 1회 <br/>
                        허용공백 문자 & 보안상 문제되는 특수문자는 발견시 제외처리 <br/>
                        (이미 등록한 공백 문자는 다른 문자로 강제전환) <br/>
                        어법에 맞지 않는 한글(쐥,뛩.. 등등) 사용 <br/>
                        금지불량 닉네임(욕설, 불건전 닉네임)은 임의 삭제 혹은 계정 징계 조치 <br/>
                        </Rule>
                        }
                    </div>
                </div>
                {password.length> 0 &&
                <div>{passwordMsg}</div>
                }
                <div>
                    <div>이름</div>
                    <InputField onChange={onChangeName} maxlength="20"/>
                </div>
                {name.length> 0 &&
                <Error>{nameMsg}</Error>
                }
                <div>
                    <div>이메일</div>
                    <InputField/>
                </div>
                {password.length> 0 &&
                <div>{passwordMsg}</div>
                }
                <div>
                    <div>인증번호</div>
                    <Certification>
                        <InputField/>
                        <Buttons value="인증코드 발송" width="fit-content" padding="5px 15px" radius="5px" height="32px"></Buttons>
                    </Certification>
                </div>
                {password.length> 0 &&
                <div>{passwordMsg}</div>
                }       
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
    position:absolute;
    top: 470px;
    left:400px;
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
export default UserInfoField;