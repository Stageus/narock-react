import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Div, Input } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import UserNav from "../components/admin/UserNav"
import PostRow from "../components/write/PostRow";
import Paging from "../components/Paging"

import { useRecoilValue } from "recoil";
import { requestState,bandnameState } from "../recoil/BackRecoil";
import { postRowState } from '../recoil/FrontRecoil'
import axios from "axios";

const BandRequest = () => {
    const request = useRecoilValue(requestState); //유저 데이터
    const bandname = useRecoilValue(bandnameState);
    // const bandnameMap = Object.values(bandname).flat().map((item)=>(item.split(',')));
    const bandnameMap = Object.values(bandname).flat();
    // console.log(bandnameMap)

    const postRow = useRecoilValue(postRowState)


    const [isDialog, setIsDialog] = useState(false); // 다이얼로그 활성화 여부
    const [selectedUser, setSelectedUser] = useState(null); //선택된 아이디 정보

    const [boardSearch,setBoardSearch] = useState('');
    const [boardSearchList,setBoardSearchList] = useState('');

    const [isChecked, setIsChecked] = useState(false);
    const [isUserRequest,setIsUserRequest] = useState([]);

    const arr = Object.values(isUserRequest)
    console.log(arr)

    const [requestInfo, setRequestInfo] = useState([]);


    //게시판 요청 불러오기
    useEffect(()=>{
        axios.get("https://www.narock.site/postRequest/all",{
            params: {
                "pages":1,
            }
        })
        .then(function (response) {
            console.log(response.data.data)

            setRequestInfo(response.data.data);
            console.log(requestInfo)
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    },[])


    const requestDialog = (e,user) => {
        e.preventDefault();
        setSelectedUser(user);
        setIsDialog(true);
    }

    const closeDialog = () => {
        setIsDialog(false);
        setSelectedUser(null);
        setBoardSearchList(null)
    }
    
    const handleCheckboxChange = (e,info) => {
        setIsChecked(e.target.checked)
        setIsUserRequest(info);
        console.log(isUserRequest)
    }

    //요청 삭제
    const handleDeleteRequest  = () => {

        console.log(arr);
        axios.delete('/postRequest',{
            data:{
                postCreateRequestIndex:arr
            }
        })
        .then(function (response) {
            alert("요청이 삭제 되었습니다.")
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    //요청 수락
    const handleAcceptRequest = () => {
        console.log(arr[0])
        axios.post("https://www.narock.site/postRequest/accept", {
            "postCreateRequestIndex": [arr[0]],
		    "bandNameArray": [arr[2]],
		    "userIndexArray": [arr[4]],
        })
        .then(function (response) {
            console.log(response)
            if(response.data.success){
            alert("요청을 수락했습니다.")
            }
        }).catch(function (error) {
            // 오류발생시 실행
        })
    }
    return (
        <div>
        <Header/>
        <Div>
            <UserNav/>
            <Div flexdirection="column" border="1px solid #e2e8ff" margin="30px 80px" width="100%">
                <Title>게시판 요청</Title>
                <Div width="100%" display="block">
                    <Div margin="0 70px" display="block">
                        <Div justifycontent="center" margin="0">
                            <PostRow
                                userId={postRow[5].label}
                                nickname={postRow[6].label}
                                requestBoard={postRow[11].label}
                                requestDate={postRow[12].label}  
                            />
                        </Div>
                        <div>
                            <div>
                            {requestInfo && requestInfo.length > 0 ?
                                <div>
                                    {requestInfo.map((v, i) => (                                    
                                        <Div key={v[i]} borderbottom="2px solid #e2e8ff" justifycontent="center">
                                            <CheckBox type="checkbox" onChange={(e=>handleCheckboxChange(e,v))}></CheckBox>
                                            <List>{v.userid}</List>
                                            <List>{v.usernickname}</List>
                                            <List>{v.postname.toUpperCase()}</List>
                                            <List>{v.postcreaterequesttimestamp}</List>
                                            <List>
                                                <Button value="요청 내용 보기" margin="0" onClick={(e)=>{requestDialog(e,v)}}/>
                                            </List>
                                        </Div>
                                    ))}
                                </div>
                                :
                                <div>게시판 요청이 없습니다.</div>
                            }
                            </div>
                        </div>
                    </Div>
                </Div>
                <Paging/>
                <div>
                    <Button value="요청 삭제" backgroundcolor="#FC3131" width="127px" padding="7px" borderradius="5px" onClick={handleDeleteRequest }/>
                    <Button value="요청 수락" width="127px" padding="7px" borderradius="5px" onClick={handleAcceptRequest}/>
                </div>
            </Div>        
        </Div>


        {isDialog && (
                    <Background>
                        <Modal>
                            <Div margin="0">
                                <UserInfo>아이디</UserInfo> <span>{selectedUser.userid}</span>
                                <UserInfo>닉네임</UserInfo> <span> {selectedUser.usernickname}</span>
                            </Div>
                            <Div margin="0">
                                <UserInfo>요청 게시판</UserInfo> <span>{selectedUser.postname}</span>
                                <UserInfo>요청 날짜</UserInfo> <span> {selectedUser.postcreaterequesttimestamp}</span>
                            </Div>
                            <div>
                                요청 내용
                                <Div border="1px solid #000" margin="5px 0" padding="10px">
                                    {selectedUser.requestdetail}
                                </Div>
                            </div>
                            <Button onClick={closeDialog} value="닫기"></Button>
                        </Modal>
                    </Background>
                )}
    </div>
    );
};


const Title = styled.div`
    background-color: #E0E6FF;
    width:100%;
    font-size:32px;
    padding:10px 0;
    color:#3185FC;
`

const List = styled.div`
    width:20%;
    margin-left:1%;
    text-align:center;
`
const CheckBox = styled.input`
    position:absolute;
    left:0;
`

const Background = styled.div`
    background-color: rgba(34, 42, 104, 0.35);
    position:absolute;
    width:100%;
    height:100vh;
    z-index:10;
    top:0;
    display:flex;
    justify-content:center;
    margin:0;
`

const Modal = styled.div`
    background-color: #fff;
    display:block;
    position:absolute;
    margin:auto;
    top:30%;
    padding:40px;
    width:650px;
`

const UserInfo = styled.p`
    margin:5px;
    color:#3185FC
`

export default BandRequest;