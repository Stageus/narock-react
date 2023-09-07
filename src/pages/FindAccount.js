import React from "react";
import Header from "../components/common/Header";
import styled from "styled-components";
import FindAccountBox from "../components/auth/FindAccountBox";
import { Align } from "../styled/ProjectStyle";
const FindAccount = () => {
    return (
        <div>
            <Header/>
            <Box>
                <FindAccountBox/>    
            </Box>
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
    border: 1px solid #e2e8ff;
`

export default FindAccount;