import React from "react";
import Header from "../components/common/Header";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AllBandNav from "../components/band/AllBandNav";
import { Align } from "../styled/ProjectStyle";
import PostDetailBox from "../components/write/PostDetailBox";


const BandPost = () => {
    const { bandname } = useParams();
    return (
        <div>
            <Header/>
            <BandHeader bandname={bandname}/>
            <Box>
                <AllBandNav bandname={bandname}/>
                <PostDetailBox bandname={bandname}/>  
            </Box>
        </div>
    );
};

const Box = styled.div`
    display:flex;
    margin-top:30px;

`

const BandHeader = styled(Align)`
    justify-content:center;
    font-size:60px;
    border: 1px solid #000;
    height:191px;

`
export default BandPost;