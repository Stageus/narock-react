import React, { useState } from "react";
import styled from 'styled-components';
import { Align } from "../../styled/ProjectStyle";
import { useParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { postState } from '../../recoil/BackRecoil';
import { isLikedState, likedState } from "../../recoil/FrontRecoil";
import PostDetail from "./PostDetail";

const PostDetailBox = () => {
    const { bandname } = useParams();

    const posts = useRecoilValue(postState); // postState 셀렉터로 데이터 가져옴
    const post = posts.find(p => p.boardName === bandname);

    const [liked,setLiked] = useRecoilState(likedState);
    const [isLiked,setIsLiked] = useRecoilState(isLikedState);

    const ClickEvent = () =>{
        if(isLiked){
            setLiked(liked - 1);
        }else{
            setLiked(liked + 1);
        }
        setIsLiked(!isLiked);

    }

    return (
        <Box>
            <PostDetail post={post} bandname={bandname}/>
            <Align>
                {isLiked ? <Icon src={`${process.env.PUBLIC_URL}/img/like_active.png`} alt="좋아요" onClick={ClickEvent}/> : <Icon src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" onClick={ClickEvent}/>}
                {<Like>{liked}</Like>}
            </Align>
        </Box>
    );
};

const Box = styled.div`
    display:flex;
    width:100%;
    margin: 0 80px;
    border: 1px solid #E2E8FF;
    padding:20px;
    flex-direction:column;
`



const Icon = styled.img`
    width:18px;
`

const Like = styled.div`
    margin-left:5px;
    color:#3185FC;
`
export default PostDetailBox;