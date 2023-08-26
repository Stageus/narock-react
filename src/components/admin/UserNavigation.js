import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserMenu from "./UserMenu"
import UserManagement  from "../../pages/UserManagement"
import BandRequest from "../../pages/BandRequest";
const UserNavigation = () => {
    const menu = [
        ['유저 관리','userManagement'], 
        ['게시판 요청','BandRequest' ],
    ]

    const [currentDomain, setCurrentDomain] = useState('userManagement');
    useEffect(()=>{
        console.log(currentDomain)
    },[currentDomain])
    return ( 
        <MenuBox>
            {menu.map(v=>(
                <UserMenu key={v[1]} menu={v[0]} domain={v[1]} currentDomain={currentDomain} setCurrentDomain={setCurrentDomain}/>
            ))}
            {/* {currentDomain === 'userManagement' && <UserManagement />}
            {currentDomain === 'BandRequest' && <BandRequest />} */}
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