import React from "react";
import Header from "../components/common/Header";
import { useParams } from 'react-router-dom';
import AllBandNav from "../components/band/AllBandNav";
import PostListBox from "../components/write/PostListBox";
import styled from 'styled-components';
import { Align } from "../styled/ProjectStyle";

const AllBandBoard = () => {
    const { bandname } = useParams();
    return (
        <div>
            <Header/>
            <BandHeader>{bandname} 게시판</BandHeader>
            <Box>
                <AllBandNav bandname={bandname}/>
                <PostListBox bandname={bandname}/>
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
export default AllBandBoard;