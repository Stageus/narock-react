import React from 'react';
import styled from "styled-components"
import { Input } from "../styled/ProjectStyle";
const InputField = (props) => {
    const {placeholder, value, type, maxlength, onChange, width, height, margin} = props;
    return ( 
        <div>
            <Field 
            placeholder={placeholder} 
            type={type} 
            maxlength={maxlength} 
            onChange={onChange}
            width={width}
            height={height}
            margin={margin}
            />
        </div>
     )
}

const Field = styled(Input)`
    display:flex;
    align-items:center;
    justify-content:center;
`
export default InputField;