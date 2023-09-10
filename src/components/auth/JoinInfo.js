import React from "react";
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
        const { id, value } = e.target;
        setRegist({
          ...regist,
          [id]: value,
        });
        validate(id,value);
        console.log(value)
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      };

      const validate = () => {
        const idRegex = /^[a-z0-9]{6,20}$/
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
        const nickNameRegex = /^[a-zA-Z0-9가-힣!@#$%^&*()_+{}|:"<>?~-]{2,16}$/;
        const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!idRegex.test(regist.id)){
            setError((error)=>({
                ...error,
                uid:"6글자 이상 20글자 미만으로 입력해 주세요."
            }))
        }else{
            setError((error)=>({
                ...error,
                uid:"사용 가능한 아이디입니다."
            }))
        }
      }
    return (
        <div onChange={handleChange}> 
            <div>
                <div>아이디 (영문소문자/숫자, 6~20자만 가능)</div>
                <Align>
                    <Input id="id" maxLength="20" marginright="10px"/>
                   {error.id ? <Success>{error.id}</Success> : regist.id.length === 0 ? null : <Error>{error.id}</Error>}
                </Align>
            </div>
            <div>
                    <div>비밀번호 (영문 대소문자/숫자/특수문자 조합, 8자~16자만 가능)</div>
                <Align>
                    <Input id="password" type="password" maxLength="16" marginright="10px"/>
                    {/* {!isPassword && password.length > 0 && <Error>{passwordMsg}</Error>} */}
                </Align>
            </div>

            <div>
                <div>
                    <div>비밀번호 확인</div>
                </div>
                <Align>
                    <Input id="confirmPassword" type="password" marginright="10px"/>
                    {/* {passwordConfirm.length> 0 && <Error>{passwordConfirmMsg}</Error>} */}
                </Align>
            </div>
                
            <div>
                <div>닉네임</div>
                <Align>
                    <Input id="nickname" maxLength="16" marginright="10px"/>
                    {/* {nickname.length> 0 &&<Error>{nicknameMsg}</Error>} */}
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
                    <Input id="name" maxLength="20" marginright="10px"/>
                    {/* {name.length> 0 &&<Error>{nameMsg}</Error>} */}
                </Align>
            </div>
            <div>
                <div>이메일</div>
                <Align>
                    <Input id="email" marginright="10px"/>
                    {/* {email.length> 0 &&<Error>{emailMsg}</Error>} */}
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
            <JoinBtn>           
                <Button type="submit" value="회원가입" width="260px" height="34px" borderradius="5px" onClick={handleSubmit}/> 
                {/* recoil로 값 가져오기 */}
            </JoinBtn> 
        </div>
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