import React from "react";
import Header from "../components/common/Header";
import BandImg from "../components/band/BandImg"
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AllBandNavigation from "../components/band/AllBandNavigation";
import Content from "../components/write/Content";
const BandPost = () => {
    const { bandname } = useParams();
    return (
        <div>
            <Header/>
            <BandImg bandname={bandname}/>
            <Box>
                <AllBandNavigation/>
                <Content/>
            </Box>
        </div>
    );
};

const Box = styled.div`
display:flex;
margin-top:30px;
`
export default BandPost;