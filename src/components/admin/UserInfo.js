import React from "react";
import styled from "styled-components";
import Buttons from "../../components/Buttons";
import InputField from "../../components/InputField";
const UserInfo = () => {
    return(
        <UserBox>
            <UserList>
                <div>
                    <div>유저 아이디 검색</div>
                    <InputField/>
                    <Buttons value="검색"/>
                </div>
                <Subject>
                    <FlexItem1>아이디</FlexItem1>
                    <FlexItem2>닉네임</FlexItem2>
                    <FlexItem3>가입날짜</FlexItem3>
                    <FlexItem4>권한</FlexItem4>
                    <FlexItem4></FlexItem4>
                </Subject>
                <List>
                    <CheckBox type="checkbox"></CheckBox>
                    <FlexItem1>zzzzzzzzzzzzzzzzzzzz</FlexItem1>
                    <FlexItem2>지짱지짱지짱지짱지짱지짱지짱지짱</FlexItem2>
                    <FlexItem3>2023.08.22</FlexItem3>
                    <FlexItem4>
                        일반회원
                    </FlexItem4>
                    <FlexItem4>
                        <Buttons value="권한 설정" margin="0"/>
                    </FlexItem4>
                </List>
                <List>
                    <CheckBox type="checkbox"></CheckBox>
                    <FlexItem1>zzzzzzzzzzzzzzzzzzzz</FlexItem1>
                    <FlexItem2>지짱지짱지짱지짱지짱지짱지짱지짱</FlexItem2>
                    <FlexItem3>2023.08.22</FlexItem3>
                    <FlexItem4>
                        일반회원
                    </FlexItem4>
                    <FlexItem4>
                        <Buttons value="권한 설정" margin="0"/>
                    </FlexItem4>
                </List>
            </UserList>
        </UserBox>

    )
}

const FlexItem1 = styled.div`
    flex-basis:170px;
    text-align:center;
`
const FlexItem2 = styled.div`
    flex-basis:240px;
    text-align:center;
`
const FlexItem3 = styled.div`
    flex-basis:100px;
    text-align:center;
`
const FlexItem4 = styled.div`
    flex-basis:160px;
    display:flex;
    justify-content:center;
`
const UserList = styled.div`
    margin:0 70px;
`
const CheckBox = styled.input`
    position:absolute;
    left:0;
`

const UserBox = styled.div`
    width:100%;
`
const Subject = styled.div`
    display:flex;
    justify-content:space-around;
    /* width:100%; */
    /* margin:0 70px; */
    border-top: 2px solid #3185FC;
    border-bottom: 2px solid #3185FC;
`

const List = styled.div`
    display: flex;
    position:relative;
    justify-content:space-around;
    align-items:center;
    text-align:center;
    border-bottom:2px solid #E2E8FF;
`
export default UserInfo;