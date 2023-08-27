import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { Align, Button } from "../styled/ProjectStyle";
import UserInfo from "../components/admin/UserInfo";
import UserNav from "../components/admin/UserNav"
import Paging from "../components/Paging"

const userManagement = () => {
    return (
        <div>
            <Header/>
            <Align>
                <UserNav/>
                <Box>
                    <Title>유저 관리</Title>
                    <UserInfo/>
                    <Paging/>
                    <Button value="계정 삭제" backgroundcolor="#FC3131" width="127px" padding="7px" borderradius="5px"/>
                </Box>            
            </Align>
        </div>
    );
};


const Box = styled(Align)`
    flex-direction:column;
    border: 1px solid #e2e8ff;
    margin:30px 80px;
    width:100%;

`
const Title = styled.div`
    background-color: #E0E6FF;
    width:100%;
    font-size:32px;
    padding:10px 0;
    color:#3185FC;
`

export default userManagement;