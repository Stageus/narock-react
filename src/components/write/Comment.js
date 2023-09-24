import React, { useState } from "react";
import styled from "styled-components";
import { Button, Div } from "../../styled/ProjectStyle";

const Comment = () => {
    const [active,setActive] = useState(false);
    const replyEvent = () =>{
        setActive(!active);
    }
    return(
        <Div padding="20px" margin="0" border="1px solid #e2e8ff" display="block">
            <div>댓글</div>
            <Div justifycontent="space-between" borderbottom="1px solid #e2e8ff" margin="0">
                <Div>
                    <img src="/img/avatar.png" width="40px" alt="프로필사진"/>
                    <Div flexdirection="column" alignitems="flex-start">
                        <div>지짱</div>
                        <div>가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이가나다라마바사아자차카타파하아야어여오요우유으이</div>
                        <Date>2023.09.14 18:35</Date>
                    </Div>
                </Div>
                <Div>
                    <Button value="답글" backgroundcolor="transparent" color="mainColor" onClick={replyEvent}></Button>
                    <Button value="수정" backgroundcolor="transparent" color="mainColor"></Button>
                    <Button value="삭제" backgroundcolor="transparent" color="mainColor"></Button>
                </Div>
            </Div>
            {active === true &&
                <Div>
                    <SubComment/>
                    <SubmitButton value="등록"/>
                </Div>
            }
                <Div>
                    <MainComment />
                    <SubmitButton value="등록"/>
                </Div>
        </Div>
    )
}

const Date = styled.div`
    color:#838383;
    font-size:11px;
`
const SubComment = styled.textarea`
    width:95%;
    margin-left:7%;
    height:80px;
    resize:none;
    border: 1px solid #ADBDFF;
    padding:5px;
`
const MainComment = styled(SubComment)`
    width:100%;
    margin:0;
`
const SubmitButton = styled(Button)`
    position:absolute;
    right:0;
    bottom:0;

`

export default Comment;