import React from "react";
import Header from "../components/common/Header";
import ResetPwBox from "../components/auth/ResetPwBox";
import styled from "styled-components";
const ResetPassword = () => {
    return (
        <div>
            <Header/>
            <Box>
                <ResetPwBox/>    
            </Box>
        </div>
    );
};

const Box = styled.div`
    margin:30px 160px;
`

export default ResetPassword;