import React from 'react';
import styled from 'styled-components';
import UserMenu from "./UserMenu"


const UserNavigation = () => {
    const menu = [
        ['유저 관리','userManagement'], 
        ['게시판 요청','BandRequest' ],
    ]
    return ( 
        <MenuBox>
            {menu.map(v=>(
                <UserMenu menu={v[0]} domain={v[1]}/>
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

export default UserNavigation;