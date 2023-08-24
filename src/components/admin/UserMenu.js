import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const UserMenu = (props) => {
    const navigate = useNavigate();

    const { menu, domain } = props;
    return ( 
        <React.Fragment>
            <Menu onClick={()=>{navigate(`/admin/${domain}`)}}>{menu}</Menu>
        </React.Fragment>
     );
}

const Menu = styled.div`
    margin:10px 0;
`
export default UserMenu;