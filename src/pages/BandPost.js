import React from "react";
import Header from "../components/common/Header";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AllBandNav from "../components/band/AllBandNav";
import PostDetail from "../components/write/PostDetail";
import { Align } from "../styled/ProjectStyle";


const BandPost = () => {
    const { bandname } = useParams();
    return (
        <div>
            <Header/>
            <BandHeader>{bandname} 게시판</BandHeader>
            <Box>
                <AllBandNav bandname={bandname}/>
                <PostDetail/>  
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