import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserManagement  from "../../pages/UserManagement"
import BandRequest from "../../pages/BandRequest";

import { useRecoilValue } from "recoil";
import { adminmenuState } from "../../recoil/FrontRecoil";
const UserNav = () => {
    const adminMenu = useRecoilValue(adminmenuState);

    return ( 
        <MenuBox>
            {adminMenu.map((menu,i)=>(
                <Menu>{menu.label}</Menu>
            ))}
        </MenuBox>
     );
}

const MenuBox = styled.div`
    border-top: 3px solid #3185FC;
    border-bottom: 3px solid #3185FC;
    padding:15px 0;
    width:160px;
    height:176px;
    font-size: 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`
const Menu = styled.div`
    margin:10px 0;
`
export default UserNav;