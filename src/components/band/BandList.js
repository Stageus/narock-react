import React from 'react'
import  styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BandList = (props) => {
    const {initial, name} = props;
    const navigate = useNavigate();

    return ( 
        <List>
            <NameTag>{initial}</NameTag>
            {name.sort().map((v,i)=>(
                <div key={i}>
                    {/* <BandName onClick={()=>{navigate(`/allBand/${v}/notice`)}} bandName={v}>{v}</BandName> */}
                    <Band onClick={()=>{navigate(`/allband/${v}`)}} bandname={v}>{v}</Band>
                </div>
            ))}
        </List>
        
     );
}

const NameTag = styled.div`
    height:36px;
    background-color: #E0E6FF;
    color:#3185fc;
    font-size:20px;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Band = styled.div`
    display:block;
    color:#222A68;
    margin:5px 8px;
    cursor:pointer;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    &:hover{
        font-weight:bold
    }
`

const List = styled.div`
    max-width:157px;
    min-height:411px;
    max-height:fit-content;
    border: 1px solid #E2E8FF;
    text-align:center;
`
export default BandList;