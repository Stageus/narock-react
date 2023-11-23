import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Button, Div } from "../../styled/ProjectStyle";

import { useRecoilState, useSetRecoilState } from 'recoil';


import { isLikedState, likedState } from "../../recoil/FrontRecoil";

import { useNavigate , useParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import axios from "axios";
import { commentState, postDetailState, replyState } from "../../recoil/BackRecoil";
import LikeButton from "./LikeButton";

const PostDetailBox = (props) => {
    
    const { bandname } = props;
    const { postid } = useParams();
    console.log(postid)
    const domain = decodeURI(window.location.pathname);
    const domainSplit = domain.split('/');
    const domainRemove = domainSplit.pop(); // domainSplit 맨 마지막 배열 삭제용

    const [post,setPost] = useRecoilState(postDetailState);

    // 좋아요 버튼
    const setComment = useSetRecoilState(commentState);
    const setReply = useSetRecoilState(replyState);

    const navigate = useNavigate();

    // 목록 돌아가기
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
            // withCredentials: true,
            params:{
                postIndex:postid,
            }
        }
        )
        .then(function (response) {
            console.log(response.data)
            setPost(response.data);
            setComment(response.data.comment);
            setReply(response.data.reply)
        }).catch(function (error) {
            console.log(error)
        })
    },[])


    const postDeleteEvent = () => {
            if (window.confirm("게시물을 삭제하시겠습니까?")) {
                axios
                    .delete('/post', {
                        data: {
                            postIndex: postid,
                        }
                    })
                    .then(function (response) {
                        alert("게시물이 삭제 되었습니다.");
                        GoToList();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                alert("삭제가 취소되었습니다.");
            }
    }

    return (
        <Div width="100%" margin="0">
            <Div width="100%" display="block" margin="0 80px">
                <Div padding="20px" border="1px solid #E2E8FF" display="block" margin="0 0 20px 0">
                    <div>
                        {post.postCategory === 0
                        ? "공지사항"
                        : post.postCategory === 1
                        ? "공연 정보"
                        : post.postCategory === 2
                        ? "갤러리"
                        : post.postCategory === 3
                        ? "자유 게시판"
                        : post.postCategory === 4
                        ? "새소식"
                        : post.postCategory === 5
                        ? "커뮤니티"
                        : post.bandIndex}
                    </div>
                    <div>{post.postTitle}</div>
                    <Div display="flex" justifycontent="space-between" margin="0">
                        <Div display="flex" alignitems="center" margin="0">
                            <ProfileImg src={post.userProfileImg} alt="프로필 사진"/>
                            <Div margin="0 10px 0 0">{post.postWriter}</Div>
                            <Div margin="0 10px 0 0">{post.postViews}</Div>
                            <Div margin="0 10px 0 0">{post.postTimestamp}</Div>
                            {/* <Div margin="0 10px 0 0">댓글 {post.comment.length+post.reply.length}</Div> */}
                        </Div>
                        <Div display="flex" alignitems="center">
                            <Button value="수정" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                            <Button value="삭제" backgroundcolor="white" color="mainColor" border="1px solid #3185FC" onClick={postDeleteEvent}/>
                            <Button value="목록" type="button" onClick={GoToList}/>
                        </Div>
                    </Div>
                    <Div margin="20px 0">{post.postContent}</Div>
                    <LikeButton postid={postid}/>
                </Div>
            <CommentBox postId={postid}/>
            </Div>
        </Div>
    );
};

const ProfileImg = styled.img`
    border-radius: 30px;
    width:40px;
    height:40px;
    margin-right:10px;
`



export default PostDetailBox;