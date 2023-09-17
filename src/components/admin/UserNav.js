import React from 'react';
import styled from 'styled-components';
import { Link, useLocation  } from 'react-router-dom';

import { useRecoilValue } from "recoil";
import { adminmenuState } from "../../recoil/FrontRecoil";
const UserNav = () => {
    const adminMenu = useRecoilValue(adminmenuState);
    const location = useLocation();
    return ( 
        <MenuBox>
            {adminMenu.map((menu,i)=>(
                <Menu key={menu.id} to={`/admin/${menu.id}`}
                isActive={location.pathname === `/admin/${menu.id}`}
                    >{menu.label}
                    </Menu>
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

const Menu = styled(Link)`
    text-decoration: none;
    margin:10px 0;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`
export default UserNav;