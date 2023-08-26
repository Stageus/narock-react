import React from 'react';
import { Button } from "../styled/ProjectStyle";

const Buttons = (props) => {
    const { value, onClick, width, height, radius, padding, margin, type, marginleft,backgroundcolor,color,border} = props;
    
    return ( 
        <Button 
        type={type}
        defaultValue={value} 
        onClick={onClick} 
        width={width} 
        height={height} 
        borderradius={radius} 
        padding={padding}
        margin={margin}
        marginleft={marginleft}
        backgroundcolor={backgroundcolor}
        color={color}
        border={border}
        readOnly
        />
     );
}

export default Buttons;