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
    const postRow = useRecoilValue(postRowState)
    const [requestInfo, setRequestInfo] = useState([]); // 게시판 요청한 유저 정보


    const [isDialog, setIsDialog] = useState(false); // 다이얼로그 활성화 여부
    const [selectedUser, setSelectedUser] = useState(null); //다이얼로그 아이디 정보

    const [requestPostIndex, setRequestPostIndex] = useState([]); //요청 게시판 인덱스
    const [bandNameArr, setBandNameArr] = useState([]);
    const [userIndexArr, setUserIndexArr] = useState([]);

    //게시판 요청 불러오기
    useEffect(()=>{
        axios.get("https://www.narock.site/postRequest/all",{
            params: {
                "pages":1,
            }
        })
        .then(function (response) {
            console.log("response값",response.data.data)
            const updatedData = response.data.data.map(item => ({
                ...item,
                postname: item.postname.toUpperCase(),
                postcreaterequesttimestamp: item.postcreaterequesttimestamp.substring(0,10),
              }));
        
              setRequestInfo(updatedData);
        }).catch(function (error) {
            console.log(error);
        })
    },[setRequestInfo])
    

    //요청 체크박스
    const handleCheckboxChange = (e,info) => {
        const checked = e.target.checked;
        if(checked){
            setRequestPostIndex(idx => [...idx,info.postcreaterequestindex]);
            setBandNameArr(idx=>[...idx,info.postname]);
            setUserIndexArr(idx=>[...idx,info.userindex]);
        }else{
            setRequestPostIndex(idx=> idx.filter(item=>item !== info.postcreaterequestindex));
            setBandNameArr(idx=> idx.filter(item=>item !== info.postname));
            setUserIndexArr(idx=> idx.filter(item=>item !== info.userindex));
        }
    }

    //다이얼로그 열기
    const requestDialog = (e,user) => {
        e.preventDefault();
        setSelectedUser(user);
        setIsDialog(true);
    }

    //다이얼로그 닫기
    const closeDialog = () => {
        setIsDialog(false);
        setSelectedUser(null);
    }


    //요청 삭제
    const handleDeleteRequest = () => {
        if (requestPostIndex.length === 0) {
            alert("체크 된 요청이 없습니다.");
        } else {
            if (window.confirm("요청을 삭제하시겠습니까?")) {
                axios
                    .delete('/postRequest', {
                        data: {
                            postCreateRequestIndex: requestPostIndex,
                        }
                    })
                    .then(function (response) {
                        alert("요청이 삭제 되었습니다.");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                alert("요청 삭제가 취소되었습니다.");
            }
        }
    };

    //요청 수락
    const handleAcceptRequest = () => {
        if (requestPostIndex.length === 0) {
            alert("체크 된 요청이 없습니다.");
        } else {
            if (window.confirm("요청을 수락하시겠습니까?")) {
                axios
                    .delete('/accept', {
                        data: {
                            "postCreateRequestIndex": requestPostIndex,
                            "bandNameArray": bandNameArr,
                            "userIndexArray": userIndexArr,
                        }
                    })
                    .then(function (response) {
                        alert("요청이 수락 되었습니다.");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                alert("요청 수락이 취소되었습니다.");
            }
        }
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
                                        <Div key={v[i]} borderbottom="2px solid #e2e8ff" justifycontent="center" margin="0" padding="10px">
                                            <CheckBox type="checkbox" onChange={(e=>handleCheckboxChange(e,v))}></CheckBox>
                                            <List>{v.userid}</List>
                                            <List>{v.usernickname}</List>
                                            <List>{v.postname}</List>
                                            <List>{v.postcreaterequesttimestamp}</List>
                                            <List>
                                                <Button value="요청 내용 보기" margin="0" onClick={(e)=>{requestDialog(e,v)}}/>
                                            </List>
                                        </Div>
                                    ))}
                                </div>
                                :
                                <Div justifycontent="center">게시판 요청이 없습니다.</Div>
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
                            <Div justifycontent="center">요청 내용</Div>
                            <Div margin="0">
                                <UserInfo>아이디</UserInfo> <Text>{selectedUser.userid}</Text>
                                <UserInfo>닉네임</UserInfo> <Text> {selectedUser.usernickname}</Text>
                            </Div>
                            <Div margin="0">
                                <UserInfo>요청 게시판</UserInfo> <Text>{selectedUser.postname}</Text>
                                <UserInfo>요청 날짜</UserInfo> <Text> {selectedUser.postcreaterequesttimestamp}</Text>
                            </Div>
                            <div>
                                요청 상세 내용
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
    margin-right:5px;
    color:#3185FC
`
const Text = styled.p`
    margin-right:5px;
`
export default BandRequest;