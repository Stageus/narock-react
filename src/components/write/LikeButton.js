import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { postDetailState, setLoginState } from "../../recoil/BackRecoil";
import { likedState } from "../../recoil/FrontRecoil";
import {  Div } from "../../styled/ProjectStyle";
const LikeButton = () => {

    const post = useRecoilValue(postDetailState);
    const auth = useRecoilValue(setLoginState)
    const [liked, setLiked] = useState(0);
    const navigate = useNavigate();

    const LikeClickEvent = () =>{
        if(auth){
            alert('로그인이 필요합니다.')
            navigate('/login')
        }else{
            axios.post("https://www.narock.site/post/like", {
                "postIndex": post.postIndex,
            },
            )
            .then(function (response) {
                if (response.data.success) {
                    postData();
                }else{
                    console.log(response)
                }      
            }).catch(function (error) {
                console.log(error);
        })
        }
    }

    useEffect(()=>{postData()},[])

    const postData = () =>{
        axios.get("https://www.narock.site/post",
        {
            params:{
                postIndex:post.postIndex,
            }
        }
        )
        .then(function (response) {
            setLiked(response.data.postLikes)
        }).catch(function (error) {
            console.log(error)
        })
    }
    
    return(
    <Div display="flex" alignitems="center" margin="0">
        {liked === "1" ? 
        <Icon src={`${process.env.PUBLIC_URL}/img/like_active.png`} alt="좋아요" onClick={LikeClickEvent}/> 
        : 
        <Icon src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" onClick={LikeClickEvent}/>}
        {<Like>{liked}</Like>}
    </Div>
    )
}

const Icon = styled.img`
    width:18px;
    cursor:pointer;
`
const Like = styled.div`
    margin-left:5px;
    color:#3185FC;

`

export default LikeButton;

