import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Title } from "../../styled/ProjectStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Main from "../../pages/Main";
const ResetPwBox = () => {
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');
    const navigate = useNavigate()
    const changePasswordEvent = () => {
        // console.log(e.target)
        axios.put("https://www.narock.site/account/password", {
            "idValue": id,
            "pwValue": password,
            "pwCheckValue": passwordConfirm
        })
        .then(function (response) {
            console.log(response)
            // alert('비밀번호가 변경되었습니다.')
            navigate(<Main/>)
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    }
    return(
        <div>
            <Title>비밀번호 재설정</Title>
            <Box>
                <div>
                    <SubTitle>비밀번호 재설정</SubTitle>
                    <Email>
                        <div>
                            <Label>아이디</Label>
                            <Input onChange={e=>setId(e.target.value)} />
                            <Label>비밀번호 (영문 대소문자/숫자/특수문자 조합, 8자~16자만 가능)</Label>
                            <Input onChange={e=>setPassword(e.target.value)} type="password"/>
                            <Label>비밀번호 확인</Label>
                            <Input onChange={e=>setPasswordConfirm(e.target.value)} type="password"/>
                        </div>
                        <ButtonBox>
                            <Button value="변경" width="100%" height="34px" borderradius="5px" onClick={changePasswordEvent}/>
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
    width:fit-content;
    box-sizing:border-box;
`
const Label = styled.div`
    text-align:left;
`

const ButtonBox = styled.div`
    display:flex;
    margin-bottom:100px;
`
export default ResetPwBox;