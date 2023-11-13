import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Title } from "../../styled/ProjectStyle";
import axios from "axios";

const FindAccountBox = () => {
    const [email, setEmail] = useState('');
    const emailSubmitEvent = () => {
        axios.post("https://www.narock.site/account/email", {
            "emailValue": email,
        },
        // {withCredentials: true}
        )
        .then(function (response) {
            if (response.data.success) {
                console.log(response)
                alert("이메일이 발송 되었습니다.")
            }else{

                console.log(response)
            }      
        }).catch(function (error) {
            console.log(error);
            // alert("로그인 실패")
        })
    }
    return(
        <div>
            <Title>아이디 / 비밀번호 찾기</Title>
            <Box>
                <div>
                    <SubTitle>가입한 이메일로 계정 찾기</SubTitle>
                    <Notice>아이디 / 비밀번호는 가입 등록한 메일 주소로 발송 해 드립니다.<br/>
                        가입할 때 사용한 메일 주소를 입력하고 "발송" 버튼을 클릭 해 주세요.
                    </Notice>
                    <Email>
                        <div>
                            <EmailLabel>가입한 이메일</EmailLabel>
                            <Input onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <ButtonBox>
                            <Button value="취소" width="100%" height="34px" color="#3185FC" backgroundcolor="white" border="1px solid #3185FC" borderradius="5px"/>
                            <Button value="발송" width="100%" height="34px" borderradius="5px" onClick={emailSubmitEvent}/>
                        </ButtonBox>
                    </Email>
                </div>
            </Box>
        </div>
    )
}

const Box = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
`

const SubTitle = styled.div`
    color: #3185FC;
    font-size: 20px;
    font-weight:bold;
    margin-top:118px;
    margin-bottom:68px;
`

const Notice = styled.div`
    color: #3185FC;
    font-size: 20px;
    margin-bottom:57px;
`

const Email = styled.div`
    margin:0 auto;
    width:260px;
    box-sizing:border-box;
`
const EmailLabel = styled.div`
    text-align:left;
`

const ButtonBox = styled.div`
    display:flex;
    margin-bottom:100px;
`
export default FindAccountBox;