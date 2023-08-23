import React from "react";
import Header from "../components/common/Header";
import BandImg from "../components/band/BandImg"
import { useParams } from 'react-router-dom';
import AllBandNavigation from "../components/band/AllBandNavigation";
import PostListBox from "../components/write/PostListBox";
import styled from 'styled-components';
const AllBandBoard = () => {
    const { bandname } = useParams();
    return (
        <div>
            <Header/>
            <BandImg bandname={bandname}/>
            <Box>
                <AllBandNavigation bandname={bandname}/>
                <PostListBox bandname={bandname}/>
            </Box>
        </div>
    );
};

const Box = styled.div`
display:flex;
margin-top:30px;
`
export default AllBandBoard;