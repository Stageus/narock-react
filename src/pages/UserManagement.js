 import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Div, Input } from "../styled/ProjectStyle";

import Header from "../components/common/Header";
import UserNav from "../components/admin/UserNav"
import PostRow from "../components/write/PostRow";
import Paging from "../components/Paging"

import { useRecoilValue } from "recoil";
import { userState,bandnameState } from "../recoil/BackRecoil";
import { postRowState } from '../recoil/FrontRecoil'
import axios from "axios";


const UserManagement = () => {
    const user = useRecoilValue(userState); //유저 데이터
    const bandname = useRecoilValue(bandnameState);
    // const bandnameMap = Object.values(bandname).flat().map((item)=>(item.split(',')));
    const bandnameMap = Object.values(bandname).flat();
    // console.log(bandnameMap)

    const postRow = useRecoilValue(postRowState)


    const [userSearch,setUserSearch] = useState(''); //유저 아이디 검색 인풋값 저장
    const [userSearchList,setUserSearchList] = useState(''); // 검색 결과

    const [isDialog, setIsDialog] = useState(false); // 다이얼로그 활성화 여부
    const [selectedUser, setSelectedUser] = useState(null); //선택된 아이디 정보

    const [boardSearch,setBoardSearch] = useState('');
    const [boardSearchList,setBoardSearchList] = useState('');
    const [selectedBoard, setSelectedBoard] = useState(null);
    
    const [userInfo, setUserInfo] = useState('');

    const [info,setInfo] = useState('');


    //get요청
    useEffect(()=>{
        axios.get("https://www.narock.site/account/all",{
            params: {
                "pages":1,
            }
        })
        .then(function (response) {
             console.log(response)
             setUserInfo(response.data.data[0])
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    },[])

    
    const userOnChangeEvent = (e) => {
        setUserSearch(e.target.value);
    }
    
    const userSearchButtonEvent = () => {
        const searchResult = user.filter(info => info.userId.includes(userSearch));
        setUserSearchList(searchResult)
    }

    const roleSettingDialog = (e,user) => {
        e.preventDefault();
        setSelectedUser(user);
        setIsDialog(true);
    }

    const closeDialog = () => {
        setIsDialog(false);
        setSelectedUser(null);
        setBoardSearchList(null)
    }

    const boardOnChangeEvent = (e) => {
        const searchValue = e.target.value;
        setBoardSearch(searchValue);
    }

    const boardSearchButtonEvent = () => {
        const searchResult = bandnameMap.filter(board => board === boardSearch);
        setBoardSearchList(searchResult);
        console.log(searchResult)
        
    }

    const clickedBoard = (e,boardSearchList) => {
        setSelectedBoard(boardSearchList);
    }
    
    return (
        <div>
            <Header/>
            <Div>
                <UserNav/>
                <Div flexdirection="column" border="1px solid #e2e8ff" margin="30px 80px" width="100%">
                    <Title>유저 관리</Title>
                    <Div width="100%" display="block">
                        <Div margin="0 70px" display="block">
                            <Div margin="0">
                                <div>유저 아이디 검색</div>
                                <Input height="fit-content" margin="0 5px" onChange={(e)=>{userOnChangeEvent(e)}}/>
                                <Button value="검색" onClick={userSearchButtonEvent}/>
                            </Div>
                            <Div justifycontent="center" margin="0">
                                <PostRow
                                    userId={postRow[5].label}
                                    nickname={postRow[6].label}
                                    joinDate={postRow[7].label}
                                    role={postRow[8].label}  
                                />
                            </Div>
                            <div>
                                {userInfo.length > 0 ? (
                                    <div>
                                    {userInfo.map((v, i) => (
                                        <Div key={v[i]}
                                        borderbottom="2px solid #e2e8ff"
                                        justifycontent="center"
                                        >
                                            <CheckBox type="checkbox"></CheckBox>
                                            <List>{v.userid}</List>
                                            <List>{v.usernickname}</List>
                                            <List>{v.usertimestamp}</List>
                                            <List>{v.userposition}</List>
                                            <List>
                                                <Button value="권한 설정" margin="0" onClick={(e)=>{roleSettingDialog(e,v)}}/>
                                            </List>
                                        </Div>
                                    ))}
                                    </div>
                                ) : (
                                    <div>
                                    {user.map((v, i) => (
                                        <Div key={v[i]}
                                        borderbottom="2px solid #e2e8ff"
                                        justifycontent="center"
                                        >
                                            <CheckBox type="checkbox"></CheckBox>
                                            <List>{v.userid}</List>
                                            <List>{v.usernickname}</List>
                                            <List>{v.usertimestamp}</List>
                                            <List>{v.userposition}</List>
                                            <List>
                                                <Button value="권한 설정" margin="0" onClick={(e)=>{roleSettingDialog(e,v)}}/>
                                            </List>
                                        </Div>
                                    ))}
                                    </div>
                                )}
                            </div>
                        </Div>
                    </Div>
                    <Paging/>
                    <Button value="계정 삭제" backgroundcolor="#FC3131" width="127px" padding="7px" borderradius="5px"/>
                </Div>        
            </Div>


            {isDialog && (
                        <Background>
                            <Modal>
                                <Div margin="0">
                                    <UserInfo>아이디</UserInfo> <span>{selectedUser.userid}</span>
                                    <UserInfo>닉네임</UserInfo> <span> {selectedUser.usernickname}</span>
                                </Div>
                                <div>
                                        <input type="radio" /> 일반 회원
                                        <input type="radio" /> 게시판 지기
                                </div>
                                <div>
                                    <span>게시판 이름</span>
                                    <Input onChange={(e)=>{boardOnChangeEvent(e)}}/>
                                    <Button value="검색" onClick={boardSearchButtonEvent}/>
                                </div>
                                <div>
                                    게시판 검색 결과
                                    <Div border="1px solid #000" margin="5px 0" padding="10px" onClick={(e)=>{clickedBoard(e,boardSearchList)}}>
                                        {boardSearchList}
                                    </Div>
                                </div>
                                <p>※ 게시판 지기는 한 게시판 당 한 명만 설정이 가능합니다.</p>
                                <Button onClick={closeDialog} value="확인"></Button>
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
export default UserManagement;