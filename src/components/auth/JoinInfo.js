import React, { useEffect } from "react";
import styled from "styled-components";
import { Input, Button, Div, Success, Error } from "../../styled/ProjectStyle";
import { useRecoilState } from 'recoil';
import { errorState,isHoverState,registState } from '../../recoil/UserStates';

const JoinInfo = () => {
    //인풋 값 확인
  
    //닉네임룰 호버
    const [isHover, setIsHover] = useRecoilState(isHoverState);
    const [regist, setRegist] = useRecoilState(registState);
    const [error, setError] = useRecoilState(errorState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        e.preventDefault();
        setRegist({
          ...regist,
          [name]: value,
        });
      };

        useEffect(()=>{
            const idRegex = /^[a-z0-9]{6,20}$/
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
            const nameRegex =  /^[가-힣a-zA-Z]{1,20}$/;
            const nickNameRegex = /^[a-zA-Z0-9가-힣!@#$%^&*()_+{}|:"<>?~-]{2,16}$/;

            //아이디
            if(regist.id===""){
                setError((error)=>({
                    ...error,
                    id:null,
                    isId:false,
                }))
            }
            else if(idRegex.test(regist.id)){
                setError((error)=>({
                    ...error,
                    id:"사용 가능한 아이디입니다.",
                    isId:true
                }))
            }
            else{
                setError((error)=>({
                    ...error,
                    id:"6글자 이상 20글자 미만으로 입력해 주세요.",
                    isId:false,
                }))
            }
            

            //패스워드
            if(regist.password === ''){ //패스워드 빈값
                setError((error)=>({
                    ...error,
                    password:"",
                    isPassword:false,
                }))
            }
            else if(passwordRegex.test(regist.password)){
                setError((error)=>({
                    ...error,
                    password:"",
                    isPassword:true,
                }))
            }
            else{ //패스워드 정규식에 맞지 않을 때
                setError((error)=>({
                    ...error,
                    password:"영문 대소문자/숫자/특수문자 조합 8자~16자로 입력해 주세요.",
                    isPassword:false,
                }))
            }


            //패스워드 확인
            if(regist.confirmPassword === '' ){
                setError((error)=>({
                    ...error,
                    confirmPassword:"",
                    isConfirmPassword:false,
                }))
            }
            else if(regist.password === regist.confirmPassword){
                setError((error)=>({
                    ...error,
                    confirmPassword:"",
                    isConfirmPassword:true,
                }))
            }
            else{
                setError((error)=>({
                    ...error,
                    confirmPassword:"비밀번호가 일치하지 않습니다.",
                    isConfirmPassword:false,
                }))
            }


            //닉네임
            if(regist.nickname === ''){
                setError((error)=>({
                    ...error,
                    nickname:null,
                    isNickname:false
                }))
            }else if(nickNameRegex.test(regist.nickname)){ //닉네임 정규식
                setError((error)=>({
                    ...error,
                    nickname:"사용 가능한 닉네임입니다.",
                    isNickname:true
                }))
            }else{
                setError((error)=>({
                    ...error,
                    nickname:"사용 불가한 닉네임입니다.",
                    isNickname:false
                }))
            }
            

            //이름
            if(regist.name === ''){
                setError((error)=>({
                    ...error,
                    name:null,
                    isName:false,
                }))
            }
            else if(nameRegex.test(regist.name)){
                setError((error)=>({
                    ...error,
                    name:"",
                    isName:true,
                }))
            }
            else{ 
                setError((error)=>({
                    ...error,
                    name:"한글, 영문 대/소문자를 사용해 주세요.",
                    isName:false,
                }))
            }
        },[regist.id,regist.password,regist.confirmPassword,regist.name,regist.nickname,setError]);

        //인증번호 발송
        const certificationEvent = async() =>{
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if(regist.email === ''){
                setError((error)=>({
                    ...error,
                    email:null,
                    isEmail:false,
                }))
                alert('유효한 이메일을 입력해 주세요.')
            }else if(emailRegex.test(regist.email)){
                setError((error)=>({
                    ...error,
                    email:null,
                    isEmail:true,
                }))

            const response = await fetch("https://www.narock.site/auth/email/signup",{
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body":JSON.stringify({
                    "emailValue":regist.email
                })
            })
            const result = await response.json()
            if(result.success){
                alert("인증번호가 발송 되었습니다.")
                console.log(result)
            }else{
                alert("이미 사용중인 이메일입니다.")
            }
            }
            else if(!emailRegex.test(regist.email)) {
                alert("유효한 이메일을 입력해 주세요.")
                return;
            } 
        }

        //인증번호 확인
        const certificationConfirmEvent = async() => {
            if(regist.certification === ''){
                setError((error)=>({
                    ...error,
                    certification:null,
                    iscertification:false,
                }))
                alert('인증번호를 입력해 주세요.')
                return;
            }

            const response = await fetch("https://www.narock.site/auth/email/signUp/confirm",{
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body":JSON.stringify({
                        "authCode":regist.certification
                    })
                })
                const result = await response.json()
                console.log(regist.certification)
                if(result.success){
                    alert("인증 되었습니다.")
                    console.log(result)
                    setError((error)=>({
                        ...error,
                        isCertification:true,
                    }))   
                }else{
                    alert('인증번호가 맞지 않습니다.')
                }
                
        }

    return (
        <form onChange={handleChange}> 
            <div>
                <label htmlFor="id">아이디 (영문소문자/숫자, 6~20자만 가능)</label>
                <Div margin="0">
                    <Input name="id" maxLength="20" marginright="10px" />
                   {error.id ? <Success>{error.id}</Success> : regist.id.length === 0 ? null : <Error>{error.id}</Error>}
                </Div>
            </div>
            <div>
                    <label htmlFor="password">비밀번호 (영문 대소문자/숫자/특수문자 조합, 8자~16자만 가능)</label>
                <Div margin="0">
                    <Input name="password" type="password" maxLength="16" marginright="10px"/>
                    {error.password && error.password.length > 0 && <Error>{error.password}</Error>}
                </Div>
            </div>

            <div>
                <div>
                    <label htmlFor="confirmPassword">비밀번호 확인</label>
                </div>
                <Div margin="0">
                    <Input name="confirmPassword" type="password" marginright="10px"/>
                    {error.confirmPassword ? <Success>{error.confirmPassword}</Success> : regist.confirmPassword.length === 0 ? null : <Error>{error.confirmPassword}</Error>}
                </Div>
            </div>
                
            <Div display="block" margin="0">
                <label htmlFor="nickname">닉네임</label>
                <Div margin="0">
                    <Input name="nickname" maxLength="16" marginright="10px"/>
                    {error.nickname ? <Success>{error.nickname}</Success> : <Error>{error.nickname}</Error>}
                </Div>
                <div>
                    <RuleHoverBtn
                         onMouseOver={()=>{setIsHover(true)}} 
                         onMouseOut={()=>{setIsHover(false)}}
                    >?</RuleHoverBtn>
                    {isHover &&
                        <Rule>16자까지, 허용공백 문자 & 보안상 문제되는 특수문자는 발견시 제외처리 <br/>
                        어법에 맞지 않는 한글(쐥,뛩.. 등등) 사용 <br/>
                        금지불량 닉네임(욕설, 불건전 닉네임)은 임의 삭제 혹은 계정 징계 조치 <br/>
                        </Rule>
                    }
                </div>
            </Div>

            <div>
                <label htmlFor="name">이름</label>
                <Div margin="0">
                    <Input name="name" maxLength="20" marginright="10px"/>
                    {error.name ? <Success>{error.name}</Success> : regist.length === 0 ? null : <Error>{error.name}</Error>}
                </Div>
            </div>
            <div>
                <label htmlFor="email">이메일</label>
                <div>
                    <Input name="email" maxLength="50"/>
                    {error.email && <Success>{error.email}</Success>}
                    {!error.isCertification ? <Button value="인증코드 발송" padding="0px 15px" radius="5px" height="32px" onClick={certificationEvent}></Button>:
                    <Button value="인증코드 발송됨" padding="0px 15px" radius="5px" height="32px" disabled backgroundColor="gray"></Button>
                    }
                </div>
            </div>
            <div>
                <label htmlFor="certification">인증번호</label>
                <div margin="0">
                    <Input name="certification" maxLength="6"/>
                    {!error.isCertification ? <Button value="확인" padding="0px 15px" radius="5px" height="32px" onClick={certificationConfirmEvent}></Button> 
                    : <Button value="인증 완료" padding="0px 15px" radius="5px" height="32px" disabled ></Button>}
                    
                </div>
            </div>
        </form>
    );
};


const Rule = styled.div`
    width:313px;
    padding:15px 10px;
    border: 1px solid #3185FC;
    font-size:10px;
    position:absolute;
    background-color:#fff;
    bottom:10px;
    left:275px;
    color:#222A68;
    z-index:10;
`

const RuleHoverBtn = styled.div`
    position:absolute;
    border-radius:20px;
    background-color:#3185FC;
    color:white;
    width:14px;
    height:14px;
    display:flex;
    align-items:center;
    justify-content:center;
    left:238px;
    bottom:25px;
`

export default JoinInfo;