import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { Align } from "../styled/ProjectStyle";
import UserInfo from "../components/admin/UserInfo";

import UserNavigation from "../components/admin/UserNavigation";
const Admin = () => {
    return (
        <div>
            <Header/>
            <Align>
                <UserNavigation/>
                <Box>
                    <Title>유저 관리</Title>
                    <UserInfo/>
                </Box>            
            </Align>
        </div>
    );
};


const Box = styled(Align)`
    flex-direction:column;
    border: 1px solid #e2e8ff;
    margin:30px 80px;

`
const Title = styled.div`
    background-color: #E0E6FF;
    width:100%;
    font-size:32px;
    padding:10px 0;
    color:#3185FC;
`

export default Admin;