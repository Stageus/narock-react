import React from "react";
import styled from "styled-components";
import { Align } from "../../styled/ProjectStyle";
import { useNavigate } from "react-router-dom";

const BandName = (props) => {
    const {bandname} = props;
    const navigate = useNavigate();
    return(
        <ListAlign>
        {Object.keys(bandname).map((initial, index) => {
            return (
                <List key={index}>
                    <NameTag>{initial}</NameTag>
                    {bandname[initial].map((v, i) => (
                        <div key={i}>
                            <Band
                                onClick={() => {navigate(`/allband/${v}/notice`)}}
                                bandname={v}
                            >{v}
                            </Band>
                        </div>
                    ))}
                </List>
            );
        })}
    </ListAlign>
    )
}

const ListAlign = styled(Align)`
    margin:0 160px;
    display:grid;
    grid-template-columns: repeat(10,1fr)
`

const List = styled.div`
    max-width:157px;
    min-height:411px;
    max-height:fit-content;
    border: 1px solid #E2E8FF;
    text-align:center;
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

export default BandName;