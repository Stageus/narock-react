import React, { useState } from "react";
import PostRow from "../write/PostRow"
import styled from "styled-components";
import { Button,Div,Input } from "../../styled/ProjectStyle";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/BackRecoil";
import { postRowState } from '../../recoil/FrontRecoil'
const UserInfo = (props) => {
    // const [userId, nickname, joinDate, role, requestBoard, requestDate, requestContent] = props;
    const user = useRecoilValue(userState);
    const [idSearch,setIdSearch] = useState('');
    const [searchList,setSearchList] = useState('');
    const postRow = useRecoilValue(postRowState)
    const [isDialog, setIsDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const onChangeEvent = (e) => {
        setIdSearch(e.target.value);
    }
    
    const searchButtonEvent = () => {
        const searchResult = user.filter(info => info.userid.includes(idSearch));
        setSearchList(searchResult)
    }

    const roleSetting = (e,user) => {
        e.preventDefault();
        console.log(user)
        setSelectedUser(user);
        setIsDialog(true);
    }

    const closeDialog = () => {
        setIsDialog(false);
        setSelectedUser(null);
    }

    return(
        <React.Fragment>
            <UserBox>
                <UserList>
                    <UserSearch>
                        <div>유저 아이디 검색</div>
                        <Input height="fit-content" margin="0 5px" onChange={(e)=>{onChangeEvent(e)}}/>
                        <Button value="검색" onClick={searchButtonEvent}/>
                    </UserSearch>
                    <Div justifyContent="center" margin="0">
                        <PostRow
                            userId={postRow[5].label}
                            nickname={postRow[6].label}
                            joinDate={postRow[7].label}
                            role={postRow[8].label}     
                        />
                    </Div>
                    <div>
                        {searchList.length > 0 ? (
                            <div>
                            {searchList.map((v, i) => (
                                <List key={v[i]}>
                                    <CheckBox type="checkbox"></CheckBox>
                                    <FlexItem1>{v.userid}</FlexItem1>
                                    <FlexItem2>{v.nickname}</FlexItem2>
                                    <FlexItem3>{v.joinDate}</FlexItem3>
                                    <FlexItem3>{v.role}</FlexItem3>
                                    <FlexItem4>
                                        <Button value="권한 설정" margin="0" onClick={(e)=>{roleSetting(e,v)}}/>
                                    </FlexItem4>
                                </List>
                            ))}
                            </div>
                        ) : (
                            <div>
                            {user.map((v, i) => (
                                <List key={v[i]}>
                                    <CheckBox type="checkbox"></CheckBox>
                                    <FlexItem1>{v.userid}</FlexItem1>
                                    <FlexItem2>{v.nickname}</FlexItem2>
                                    <FlexItem3>{v.joinDate}</FlexItem3>
                                    <FlexItem3>{v.role}</FlexItem3>
                                    <FlexItem4>
                                        <Button value="권한 설정" margin="0" onClick={(e)=>{roleSetting(e,v)}}/>
                                    </FlexItem4>
                                </List>
                            ))}
                            </div>
                        )}
                    </div>
                </UserList>
            </UserBox>
                {isDialog && (
                    <Background>
                        <Modal>
                            {/* 모달 내용을 여기에 추가하세요 */}
                            <h2>사용자 정보</h2>
                            <p>아이디 <span>{selectedUser.userid}</span></p>
                            <p>닉네임 <span>{selectedUser.nickname}</span></p>
                            <div>
                                <span>게시판 이름</span>
                                <Input/>
                                <Button value="검색"/>
                            </div>
                            <div>
                                게시판 검색 결과
                                <div>검색결과 출력 창</div>
                            </div>
                            <p>※ 게시판 지기는 한 게시판 당 한 명만 설정이 가능합니다.</p>
                            <Button onClick={closeDialog} value="확인"></Button>
                        </Modal>
                    </Background>
                )}
        </React.Fragment>
    )
}

const UserBox = styled.div`
    width:100%;
`

const UserSearch = styled.div`
    display:flex;
    /* justify-content: end; */
    align-items: center;
`

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
    flex-basis:200px;
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

const List = styled.div`
    display: flex;
    position:relative;
    justify-content:space-around;
    align-items:center;
    text-align:center;
    border-bottom:2px solid #E2E8FF;
`
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

const Modal = styled(Div)`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
`
export default UserInfo;