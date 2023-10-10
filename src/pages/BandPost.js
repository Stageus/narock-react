import React from "react";
import Header from "../components/common/Header";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Align } from "../styled/ProjectStyle";
import AllBandNav from "../components/band/AllBandNav";
import PostDetailBox from "../components/write/PostDetailBox";
import { useRecoilValue } from 'recoil';
import { commentState, postState } from '../recoil/BackRecoil';


const BandPost = () => {
    const { bandname } = useParams();
    const posts = useRecoilValue(postState); // postState 셀렉터로 데이터 가져옴
    const comments = useRecoilValue(commentState); // postState 셀렉터로 데이터 가져옴

    return (
        <div>
            <Header/>
            <BandHeader bandname={bandname}/>
            <Box>
                <AllBandNav bandname={bandname}/>
                <PostDetailBox bandname={bandname} post={posts} bandcomments={comments}/>  
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