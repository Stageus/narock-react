import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const AllBandMenu = (props) => {
    const navigate = useNavigate();

    const { menu, domain, bandname } = props;
    return ( 
        
        <React.Fragment>
            <Menu onClick={()=>{navigate(`/allband/${bandname}/${domain}`)}}>{menu}</Menu>
        </React.Fragment>
     );
}

const Menu = styled.div`
    margin:10px 0;
`
export default AllBandMenu;