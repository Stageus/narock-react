import React from "react";
import styled from "styled-components";
import { Align } from "../../styled/ProjectStyle";

const TermsAndCondition = () => {
    return (
        <div>
            <Box>
                <input/>
                <input type="checkbox" /> [필수] 이용 약관에 동의합니다.
            </Box>
        </div>
    );
}

const Box = styled.div`
    /* display:flex; */
    /* flex-direction:column; */

`
 
export default TermsAndCondition;