import React, { useState } from "react";
import PostRow from "../write/PostRow"
import styled from "styled-components";
import { Button,Input } from "../../styled/ProjectStyle";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/BackRecoil";
import { postRowState } from '../../recoil/FrontRecoil'
const UserInfo = (props) => {
    // const [userId, nickname, joinDate, role, requestBoard, requestDate, requestContent] = props;
    const user = useRecoilValue(userState);
    const [idSearch,setIdSearch] = useState('');
    const [searchList,setSearchList] = useState('');
    const postRow = useRecoilValue(postRowState)
    const onChangeEvent = (e) => {
        setIdSearch(e.target.value);
    }
    
    const searchButtonEvent = () => {
        const searchResult = user.filter(info => info.userid.includes(idSearch));
        setSearchList(searchResult)
    }
    return(
        <UserBox>
            <UserList>
                <UserSearch>
                    <div>유저 아이디 검색</div>
                    <Input height="fit-content" margin="0 5px" onChange={(e)=>{onChangeEvent(e)}}/>
                    <Button value="검색" onClick={searchButtonEvent}/>
                </UserSearch>
                <Subject>
                    <PostRow
                        userId={postRow[5].label}
                        nickname={postRow[6].label}
                        joinDate={postRow[7].label}
                        role={postRow[8].label}     
                    />
                </Subject>
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
                                <Button value="권한 설정" margin="0" />
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
                                <Button value="권한 설정" margin="0" />
                            </FlexItem4>
                            </List>
                        ))}
                        </div>
                    )}
                </div>
                {/* <List>
                    <CheckBox type="checkbox"></CheckBox>
                    <FlexItem1>zzzzzzzzzzzzzzzzzzzz</FlexItem1>
                    <FlexItem2>지짱지짱지짱지짱지짱지짱지짱지짱</FlexItem2>
                    <FlexItem3>2023.08.22</FlexItem3>
                    <FlexItem4>
                        일반회원
                    </FlexItem4>
                    <FlexItem4>
                        <Button value="권한 설정" margin="0"/>
                    </FlexItem4>
                </List> */}
            </UserList>
        </UserBox>

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