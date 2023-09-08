import React from 'react';
import styled from 'styled-components';
import AllBandMenu from "./AllBandMenu"

import { useRecoilValue } from "recoil";
import { bandmenuState } from "../../recoil/FrontRecoil";
const AllBandNav = (props) => {
    const { bandname } = props;
    const bandmenu = useRecoilValue(bandmenuState)
    return ( 
        <MenuBox>
            {bandmenu.map(v=>(
                <AllBandMenu menu={v.label} domain={v.id} bandname={bandname}/>
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

export default AllBandNav;