import React from 'react';
import styled from 'styled-components';


const UserMenu = (props) => {

    const { menu, domain, currentDomain, setCurrentDomain } = props;

    const handleClick = () => {
        setCurrentDomain(domain);
        // console.log(currentDomain)
    }
    return ( 
        <React.Fragment>
            <Menu onClick={handleClick}>{menu}</Menu>
        </React.Fragment>
     );
}

const Menu = styled.div`
    margin:10px 0;
`
export default UserMenu;