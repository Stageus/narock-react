import React from 'react';
import styled from "styled-components"
import { Button } from "../styled/ProjectStyle";

const Buttons = (props) => {
    const { value, onClick, width, height, radius, padding, margin, type} = props;
    
    return ( 
        <Button 
        type="button" 
        value={value} 
        onClick={onClick} 
        width={width} 
        height={height} 
        borderRadius={radius} 
        padding={padding}
        margin={margin}
        />
     );
}

export default Buttons;