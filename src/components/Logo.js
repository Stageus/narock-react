import React from 'react';
import styled from "styled-components"
import { Align } from "../styled/ProjectStyle";

const Logo = () => {
    return(
        <LogoAlign>
            <img src='img/logo.png' alt="logo"></img>
        </LogoAlign>
    )
}

const LogoAlign = styled(Align)`
    display:flex;
    align-items:center;
    justify-content:center;
`
export default Logo;