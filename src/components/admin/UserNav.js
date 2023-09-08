import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserMenu from "./UserMenu"
import UserManagement  from "../../pages/UserManagement"
import BandRequest from "../../pages/BandRequest";

import { useRecoilValue } from "recoil";
import { adminmenuState } from "../../recoil/FrontRecoil";
const UserNav = () => {
    const adminMenu = useRecoilValue(adminmenuState);

    return ( 
        <MenuBox>
            {adminMenu.map(v=>(
                <UserMenu key={v[1]} menu={v.label} domain={v.id}/>
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

export default UserNav;