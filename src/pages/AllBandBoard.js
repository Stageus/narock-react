import React from "react";
import Header from "../components/common/Header";
import { useParams } from 'react-router-dom';
import AllBandNav from "../components/band/AllBandNav";
import PostListBox from "../components/write/PostListBox";
import styled from 'styled-components';
import { Align } from "../styled/ProjectStyle";
import PostRow from "../components/write/PostRow";

const AllBandBoard = () => {
    const { bandname } = useParams();
    return (
        <div>
            <Header/>
            <BandHeader>{bandname} 게시판</BandHeader>
            <Box>
                <AllBandNav bandname={bandname}/>
                <Width>
                    <PostRow/>
                    <PostListBox bandname={bandname}/>
                </Width>
            </Box>
        </div>
    );
};


const BandHeader = styled(Align)`
    justify-content:center;
    font-size:60px;
    border: 1px solid #000;
    height:191px;
`

const Box = styled.div`
    display:flex;
    margin-top:30px;
`

const Width = styled.div`
    width:100%;
    margin:0 80px;
`
export default AllBandBoard;