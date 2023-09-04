import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Error, Input, Success } from "../../styled/ProjectStyle";

const BandRequestDialog = (props) => {
    const { bandnames, dialog, setDialog } = props;
    const [inputValue, setInputValue] = useState("");
    const [requestValue, setRequestValue] = useState("");
    const [bandExist, setBandExist] = useState(false);

    const bandnameMap = Object.values(bandnames).flat();

    const [userData, setUserData] = useState({
        boardName:"",
        boardRequest:"",
        bandExist:""
    });

    const NameOnChangeEvent = (e) =>{
        const value = e.target.value;
        setInputValue(value);
        handleUserDataChange("boardName", value);
    }


    const RequestOnChangeEvent = (e) => {
        const value = e.target.value;
        setRequestValue(value);
        handleUserDataChange("boardRequest", value);
    };

    //밴드 이름 중복 체크
    useEffect(() => {
        const bandExists = bandnameMap.includes(inputValue)
        setBandExist(bandExists);
        // handleUserDataChange("bandExist", bandExists); //이 코드 사용하면 무한루프...
    }, [inputValue, bandnameMap]);


    const handleUserDataChange = (field, value) => {
        setUserData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };
    
    const sendRequest = () => {
        if(!userData.boardName || !userData.boardRequest){
            alert("모든 칸을 입력 해 주세요.")
        }else{
            alert("등록이 완료 됐습니다.")
            console.log(userData)
        }
    }
    return(
        <Background>
            <Dialog>
                <Title>게시판 생성 요청</Title>
                <div>
                    <div>
                        게시판 이름
                        <div>
                        <Input onChange={(e)=>{NameOnChangeEvent(e)}} maxLength="40"/>
                            {inputValue.length === 0 ? null : bandExist ?(
                                <Error>이미 존재하는 게시판입니다.</Error>
                                ):(
                                    <Success>사용 가능한 게시판입니다.</Success>
                            )
                            
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        게시판 설명
                        <div>
                            <TextArea maxLength="200" onChange={(e)=>{RequestOnChangeEvent(e)}}/>
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
export default BandRequestDialog;