import React, { useEffect } from "react";
import styled from "styled-components";
import { Button, Error, Input, Success } from "../../styled/ProjectStyle";

import { useRecoilState } from "recoil";
import { bandExistState, inputValueState, requestValueState, userDataState } from "../../recoil/FrontRecoil";
import axios from "axios";

// import axios from "axios";

const BandRequestDialogBox = (props) => {
    const { bandname, setDialog } = props;
    const [inputValue, setInputValue] = useRecoilState(inputValueState)
    const [requestValue, setRequestValue] = useRecoilState(requestValueState);
    const [bandExist, setBandExist] = useRecoilState(bandExistState);

    const bandnameMap = Object.values(bandname).flat();

    const [userData, setUserData] = useRecoilState(userDataState);

    const onChangeEvent = (e) => {
        const { name, value } = e.target;
        const boardName = userData.boardName;
        const boardRequest = userData.boardRequest;
        const bandExists = bandnameMap.includes(boardName);

        setBandExist(bandExists);
        setUserData({
            ...userData,
            [name]: value,
        });
        setInputValue(boardName);
        setRequestValue(boardRequest);
    }

    const sendRequest = () => {
        
        
        if(!userData.boardName || !userData.boardRequest){
            alert("모든 칸을 입력 해 주세요.")
            return;
        }else if(bandExist){
            alert("이미 존재하는 게시판입니다.")
            return;
        }
        // else{
        //     alert("등록이 완료 됐습니다.")
        //     console.log(userData)
        // }

        axios.post("https://www.narock.site/postRequest", {
            "bandName": userData.boardName,
            "requestMessage": userData.boardRequest
        },
        // {withCredentials: true}
        )
        .then(function (response) {
            if (response.status === 200) {
                console.log(response)
                alert('게시판 요청이 완료 됐습니다.')
            }
        }).catch(function (error) {
            console.log(error);
            alert("요청 실패")
        }).then(function() {
            // 항상 실행
        });
    }




    return(
        <Background>
            <Dialog onChange={(e)=>{onChangeEvent(e)}}>
            <Title>게시판 생성 요청</Title>
            <div>
                <div>
                    게시판 이름
                    <div>
                    <Input maxLength="40" name="boardName"/>
                        {
                            inputValue.length === 0 ? null : bandExist 
                            ?(<Error>이미 존재하는 게시판입니다.</Error>)
                            :(<Success>사용 가능한 게시판입니다.</Success>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <div>
                    게시판 설명
                    <div>
                        <TextArea maxLength="200" name="boardRequest"/>
                    </div>
                </div>
            </div>
            <Rule>
            ※ 밴드 생성 요청이 수락 될 경우, 신청한 유저가 해당 게시판의 관리자가 됩니다.
            </Rule>
            <Rule>
            ※ 신청한 이름이 곧 게시판의 이름이 되므로 신중히 작성 부탁 드립니다.
            </Rule>
            <Button value="요청" onClick={sendRequest}/>
            <Button value="닫기" onClick={setDialog}/>
        </Dialog>
        </Background>
    )
}
const Background = styled.div`
    background-color: rgba(34, 42, 104, 0.35);
    position:absolute;
    width:100%;
    height:100vw;
    z-index:10;
    top:0;
    display:flex;
    justify-content:center;
`
const Dialog = styled.div`
    position:absolute;
    top:15%; 
    background-color: #fff;
    padding:50px;
`

const Title = styled.div`
    text-align:center;
    font-size:20px;
    color:#3185FC
`
const TextArea = styled.textarea`
    min-width:100%;
    border: 1px solid #3185fc;
    border-radius:5px;
    height:80px;
    resize:none;
`

const Rule = styled.div`
    color:#FC3131
`
export default BandRequestDialogBox;