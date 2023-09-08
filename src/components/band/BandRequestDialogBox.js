import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { bandExistState, inputValueState, requestValueState, userDataState } from "../../recoil/FrontRecoil";
import BandRequestDialog from "./BandRequestDialog";
// import axios from "axios";

const BandRequestDialogBox = (props) => {
    const { bandnames, setDialog } = props;
    const [inputValue, setInputValue] = useRecoilState(inputValueState)
    const [requestValue, setRequestValue] = useRecoilState(requestValueState);
    const [bandExist, setBandExist] = useRecoilState(bandExistState);

    const bandnameMap = Object.values(bandnames).flat();

    const [userData, setUserData] = useRecoilState(userDataState);

    const NameOnChangeEvent = (e) =>{
        const value = e.target.value;
        setInputValue(value);
        setUserData({
            ...userData,
            "boardName": value
        }); 
        console.log(bandExist)
    }
    const RequestOnChangeEvent = (e) => {
        const value = e.target.value;
        setRequestValue(value);
        setUserData({
            ...userData,
            "boardRequest": value
        });
    };

    //밴드 이름 중복 체크
    useEffect(() => {
        const bandExists = bandnameMap.includes(inputValue)
        setBandExist(bandExists);
        setUserData({
            ...userData,
            "bandExist": bandExist
        });
    }, [inputValue]);

    // const sendRequest = async () => {
        
    //     if(!userData.boardName || !userData.boardRequest){
    //         alert("모든 칸을 입력 해 주세요.")
    //         return;
    //     }else if(bandExist){
    //         alert("이미 존재하는 게시판입니다.")
    //         return;
    //     }
    //     else{
    //         alert("등록이 완료 됐습니다.")
    //         console.log(userData)
    //     }

    //     try{
    //         const data = userData;
    //         await axios.post('http://localhost:3001', data);
    //         console.log('데이터가 전송됨')
    //     }catch (error){
    //         console.error('전송 오류:',error)
    //     }
    // }

    const sendRequest = () => {
        
        if(!userData.boardName || !userData.boardRequest){
            alert("모든 칸을 입력 해 주세요.")
            return;
        }else if(bandExist){
            alert("이미 존재하는 게시판입니다.")
            return;
        }
        else{
            alert("등록이 완료 됐습니다.")
            console.log(userData)
        }
    }

    return(
        <Background>
            <BandRequestDialog bandExist={bandExist} inputValue={inputValue} NameOnChangeEvent={NameOnChangeEvent} RequestOnChangeEvent={RequestOnChangeEvent} sendRequest={sendRequest} setDialog={setDialog}/>
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
export default BandRequestDialogBox;