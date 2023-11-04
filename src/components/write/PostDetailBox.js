import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Button, Div } from "../../styled/ProjectStyle";

import { useRecoilState, useRecoilpostData } from 'recoil';

import { isLikedState, likedState } from "../../recoil/FrontRecoil";

import { useNavigate , useParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import axios from "axios";

const PostDetailBox = (props) => {
    const { bandname,post } = props;
    
    const { postid } = useParams();
    const domain = decodeURI(window.location.pathname);
    const domainSplit = domain.split('/');
    const domainRemove = domainSplit.pop(); // domainSplit 맨 마지막 배열 삭제용
    const keywordsToCheck = ['notice', 'community', 'concertinfo', 'news', 'gallery'];
    const foundKeywords = keywordsToCheck.filter(keyword => domainSplit.includes(keyword)).join(',');
    const [postData, setPostData] = useState({});

    // 좋아요 버튼
    const [liked,setLiked] = useRecoilState(likedState);
    const [isLiked,setIsLiked] = useRecoilState(isLikedState);

    const navigate = useNavigate();

    //좋아요 클릭
    const LikeClickEvent = () =>{
        if(isLiked){
            setLiked(liked - 1);
        }else{
            setLiked(liked + 1);
        }
        setIsLiked(!isLiked);

    }
    const GoToList = () => {
        if(domain.includes('/allband')){
            navigate(`/allband/${bandname}/${domainSplit.reverse()[0]}`)
        }else{
            navigate(`/${domainSplit.reverse()[0]}`)
        }
    }



    useEffect(()=>{
        axios.get("https://www.narock.site/post",
        {
            withCredentials: true,
            params:{
                postIndex:postid,
            }
        }
        )
        .then(function (response) {
             console.log(response.data)
             setPostData(response.data)
        }).catch(function (error) {
            console.log(error)
        })
    },[])
    return (
        <Div width="100%" margin="0">
            <Div width="100%" display="block" margin="0 80px">
                <Div padding="20px" border="1px solid #E2E8FF" display="block" margin="0 0 20px 0">
                    <div>
                        {postData.postCategory === 0
                        ? "공지사항"
                        : postData.postCategory === 1
                        ? "공연 정보"
                        : postData.postCategory === 2
                        ? "갤러리"
                        : postData.postCategory === 3
                        ? "자유 게시판"
                        : postData.postCategory === 4
                        ? "새소식"
                        : postData.postCategory === 5
                        ? "커뮤니티"
                        : postData.bandIndex}
                    </div>
                    <div>{postData.postTitle}</div>
                    <Div display="flex" justifycontent="space-between" margin="0">
                        <Div display="flex" alignitems="center" margin="0">
                            <ProfileImg src={postData.postImgUrl} alt="프로필 사진"/>
                            <Div margin="0 10px 0 0">{postData.postWriter}</Div>
                            <Div margin="0 10px 0 0">{postData.postViews}</Div>
                            <Div margin="0 10px 0 0">{postData.postTimestamp}</Div>
                            {/* <Div margin="0 10px 0 0">댓글 {postData.comment.length+postData.reply.length}</Div> */}
                        </Div>
                        <Div display="flex" alignitems="center">
                            <Button value="수정" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                            <Button value="삭제" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                            <Button value="목록" type="button" onClick={GoToList}/>
                        </Div>
                    </Div>
                    <Div margin="20px 0">{postData.postContent}</Div>
                    <Div display="flex" alignitems="cetnter" margin="0">
                        {isLiked ? <Icon src={`${process.env.PUBLIC_URL}/img/like_active.png`} alt="좋아요" onClick={LikeClickEvent}/> : <Icon src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" onClick={LikeClickEvent}/>}
                        {<Like>{liked}</Like>}
                    </Div>
                </Div>
            <CommentBox comment={postData.comment} bandname={bandname} postId={postData.postIndex} reply={postData.reply} post={post}/>
            </Div>
        </Div>
    );
};

const ProfileImg = styled.img`
    width:40px;
    margin-right:10px;
`
const Icon = styled.img`
    width:18px;
    cursor:pointer;
`

const Like = styled.div`
    margin-left:5px;
    color:#3185FC;

`
export default PostDetailBox;