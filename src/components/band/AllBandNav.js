import React from 'react';
import styled from 'styled-components';

import { useRecoilValue } from "recoil";
import { bandmenuState } from "../../recoil/FrontRecoil";
import { useNavigate } from 'react-router-dom';
const AllBandNav = (props) => {
    const { bandname } = props;
    const bandmenu = useRecoilValue(bandmenuState)
    const navigate = useNavigate();
    return ( 
        <MenuBox>
            {bandmenu.map(menu=>(
                <Menu onClick={()=>{navigate(`/allband/${bandname}/${menu.id}`)}}>{menu.label}</Menu>
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
export default AllBandNav;