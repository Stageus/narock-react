import React from 'react';
import styled from 'styled-components';
import { Link, useLocation  } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { bandmenuState } from "../../recoil/FrontRecoil";

const AllBandNav = (props) => {
    const { bandname } = props;
    const bandmenu = useRecoilValue(bandmenuState)
    const location = useLocation();
    return ( 
        <MenuBox>
            {bandmenu.map(menu=>(
                    <Menu to={`/allband/${encodeURIComponent(bandname)}/${encodeURIComponent(menu.id)}`}
                    isActive={location.pathname === `/allband/${encodeURIComponent(bandname)}/${encodeURIComponent(menu.id)}`}>
                        {menu.label}
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
    margin:10px 0;
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
    color:#222A68;
`
export default AllBandNav;