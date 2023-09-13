import React, { useEffect } from "react";
import styled from "styled-components";
import { Align, Input, Button } from "../../styled/ProjectStyle";
import { useRecoilState,  } from 'recoil';
import {
    errorState,
  isHoverState,registState
} from '../../recoil/UserStates';

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
        console.log(value)
      };

        useEffect(()=>{
            const idRegex = /^[a-z0-9]{6,20}$/
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
            const nameRegex =  /^[가-힣a-zA-Z]{1,20}$/;
            const nickNameRegex = /^[a-zA-Z0-9가-힣!@#$%^&*()_+{}|:"<>?~-]{2,16}$/;
            const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if(!idRegex.test(regist.id)){
                setError((error)=>({
                    ...error,
                    id:"6글자 이상 20글자 미만으로 입력해 주세요."
                }))
            }else{
                setError((error)=>({
                    ...error,
                    id:"사용 가능한 아이디입니다."
                }))
            }
            if(!passwordRegex.test(regist.password)){ //패스워드 정규식에 맞지 않을 때
                setError((error)=>({
                    ...error,
                    password:"영문 대소문자/숫자/특수문자 조합 8자~16자로 입력해 주세요."
                }))
            }
            if(regist.password === regist.confirmPassword){ //패스워드 불일치
                setError((error)=>({
                    ...error,
                    confirmPassword:""
                }))
            }else{
                setError((error)=>({
                    ...error,
                    confirmPassword:"비밀번호가 일치하지 않습니다."
                }))
            }
            if(!nickNameRegex.test(regist.nickname)){ //닉네임 정규식
                setError((error)=>({
                    ...error,
                    nickname:"사용할 수 없는 닉네임입니다."
                }))
            }
            if(!emailRegex.test(regist.email)){ //이메일 정규식
                setError((error)=>({
                    ...error,
                    email:"유효한 이메일을 작성해 주세요."
                }))
            }
            if(!nameRegex.test(regist.name)){ //이름 정규식
                setError((error)=>({
                    ...error,
                    name:"한글 영문 대/소문자를 사용해 주세요."
                }))
            }
        },[regist.id]);
    return (
        <form onChange={handleChange}> 
            <div>
                <label htmlFor="id">아이디 (영문소문자/숫자, 6~20자만 가능)</label>
                <Align>
                    <Input name="id" maxLength="20" marginright="10px" />
                   {error.id ? <Success>{error.id}</Success> : regist.id.length === 0 ? null : <Error>{error.id}</Error>}
                </Align>
            </div>
            <div>
                    <label htmlFor="password">비밀번호 (영문 대소문자/숫자/특수문자 조합, 8자~16자만 가능)</label>
                <Align>
                    <Input name="password" type="password" maxLength="16" marginright="10px"/>
                    {error.password && error.password.length > 0 && <Error>{error.password}</Error>}
                </Align>
            </div>

            <div>
                <div>
                    <label htmlFor="confirmPassword">비밀번호 확인</label>
                </div>
                <Align>
                    <Input name="confirmPassword" type="password" marginright="10px"/>
                    {/* {passwordConfirm.length> 0 && <Error>{passwordConfirmMsg}</Error>} */}
                    {error.confirmPassword ? <Success>{error.confirmPassword}</Success> : regist.confirmPassword.length === 0 ? null : <Error>{error.confirmPassword}</Error>}
                </Align>
            </div>
                
            <div>
                <label htmlFor="nickname">닉네임</label>
                <Align>
                    <Input name="nickname" maxLength="16" marginright="10px"/>
                    {/* {nickname.length> 0 &&<Error>{nicknameMsg}</Error>} */}
                    {error.nickname ? <Error>{error.nickname}</Error> : regist.nickname.length === 0 ? null : <Error>{error.nickname}</Error>}
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
                <label htmlFor="name">이름</label>
                <Align>
                    <Input name="name" maxLength="20" marginright="10px"/>
                    {/* {name.length> 0 &&<Error>{nameMsg}</Error>} */}
                    {error.name ? <Success>{error.name}</Success> : regist.length === 0 ? null : <Error>{error.name}</Error>}
                </Align>
            </div>
            <div>
                <label htmlFor="email">이메일</label>
                <Align>
                    <Input name="email" marginright="10px" maxLength="50"/>
                    {/* {email.length> 0 &&<Error>{emailMsg}</Error>} */}
                    {error.email ? <Success>{error.email}</Success> : regist.length === 0 ? null : <Error>{error.email}</Error>}
                </Align>
            </div>
            <div>
                <label htmlFor="certification">인증번호</label>
                <Certification>
                    <Input name="certification"/>
                    <Button value="인증코드 발송" padding="0px 15px" radius="5px" height="32px"></Button>
                </Certification>
            </div>
            {/* {password.length> 0 &&
            <div>{passwordMsg}</div>
            }        */}
        </form>
    );
};
const JoinBtn = styled(Align)`
    justify-content:center;
`
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