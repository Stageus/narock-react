import React from 'react';
import styled from 'styled-components';


const UserMenu = (props) => {

    const { menu, domain } = props;
    return ( 
        <React.Fragment>
            <Menu>{menu}</Menu>
        </React.Fragment>
     );
}

const Menu = styled.div`
    margin:10px 0;
`
export default UserMenu;