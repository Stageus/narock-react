import React from "react";
import Header from "../components/common/Header";
import BandImg from "../components/band/BandImg"
import { useParams } from 'react-router-dom';
import AllBandBoardList from "../components/band/AllBandBoardList";
import PostListBox from "../components/write/PostListBox";
import styled from 'styled-components';
const IndividualBand = () => {
    const { bandname } = useParams();
    return (
        <div>
            <Header/>
            <BandImg bandname={bandname}/>
            <Box>
                <AllBandBoardList bandname={bandname}/>
                <PostListBox bandname={bandname}/>
            </Box>
        </div>
    );
};

const Box = styled.div`
display:flex;
margin-top:30px;
`

export default IndividualBand;