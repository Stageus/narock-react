import React from "react";
import styled from 'styled-components';
import { Button, Div } from "../../styled/ProjectStyle";

import { useRecoilState } from 'recoil';

import { isLikedState, likedState } from "../../recoil/FrontRecoil";
import Comment from "./Comment";
import { useNavigate , useParams } from "react-router-dom";

const PostDetailBox = (props) => {
    const { postid } = useParams();
    const { 
        bandname,
        sortedPost,
        domain, 
        bandposts, 
        bandcomments,
        newsPost,
        noticePost,
        communityPost,
        // comment
    } = props;
    const post = bandposts.filter(p => p.boardName === bandname && p.postIndex === parseInt(postid));
    // const comment = bandcomments.filter(p => p.boardName === bandname && p.postId === parseInt(postid));
    // console.log(post)
    
    const community = communityPost.filter(p => p.postIndex === parseInt(postid));

    const [liked,setLiked] = useRecoilState(likedState);
    const [isLiked,setIsLiked] = useRecoilState(isLikedState);
    const navigate = useNavigate();
    const ClickEvent = () =>{
        if(isLiked){
            setLiked(liked - 1);
        }else{
            setLiked(liked + 1);
        }
        setIsLiked(!isLiked);

    }

    return (
        <Div width="100%" margin="0 80px" padding="20px" flexdirection="column">
            {/* {
            post && post.length > 0 && post.map((value,idx)=>{
                return(
                <Div key={idx} width="100%" display="block">
                    <Div padding="20px" border="1px solid #E2E8FF" display="block" margin="0 0 20px 0">
                        <div>{value.boardName}</div>
                        <div>{value.postTitle}</div>
                        <Div display="flex" justifycontent="space-between" borderbottom="1px solid #E2E8FF" margin="0">
                            <Div display="flex" alignitems="center" margin="0">
                                <ProfileImg src={value.postImgUrl} alt="프로필 사진"/>
                                <Div margin="0 10px 0 0">{value.postWriter}</Div>
                                <Div margin="0 10px 0 0">{value.postViews}</Div>
                                <Div margin="0 10px 0 0">{value.postTimestamp}</Div>
                                <Div margin="0 10px 0 0">댓글갯수</Div>
                            </Div>
                            <Div display="flex" alignitems="center">
                                <Button value="수정" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                                <Button value="삭제" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                                <Button value="목록" type="button" onClick={()=>{navigate(`/allband/${bandname}/notice`)}}/>
                            </Div>
                        </Div>
                        <Div margin="20px 0">{value.content}</Div>
                        <Div display="flex" alignitems="cetnter" margin="0">
                            {isLiked ? <Icon src={`${process.env.PUBLIC_URL}/img/like_active.png`} alt="좋아요" onClick={ClickEvent}/> : <Icon src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" onClick={ClickEvent}/>}
                            {<Like>{liked}</Like>}
                        </Div>
                    </Div>
                    <Comment comment={value.comment} bandname={bandname} postId={value.postIndex} reply={value.reply} post={post}/>
                </Div>
                )
                })} */}
            {community && community.length > 0 &&  community.map((value,idx)=>{
                return(
                <Div key={idx} width="100%" display="block">
                    <Div padding="20px" border="1px solid #E2E8FF" display="block" margin="0 0 20px 0">
                        <div>{value.boardName}</div>
                        <div>{value.postTitle}</div>
                        <Div display="flex" justifycontent="space-between" margin="0">
                            <Div display="flex" alignitems="center" margin="0">
                                <ProfileImg src={value.postImgUrl} alt="프로필 사진"/>
                                <Div margin="0 10px 0 0">{value.postWriter}</Div>
                                <Div margin="0 10px 0 0">{value.postViews}</Div>
                                <Div margin="0 10px 0 0">{value.postTimestamp}</Div>
                                <Div margin="0 10px 0 0">댓글갯수</Div>
                            </Div>
                            <Div display="flex" alignitems="center">
                                <Button value="수정" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                                <Button value="삭제" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                                <Button value="목록" type="button" onClick={()=>{navigate(`/allband/${bandname}/notice`)}}/>
                            </Div>
                        </Div>
                        <Div margin="20px 0">{value.postContent}</Div>
                        <Div display="flex" alignitems="cetnter" margin="0">
                            {isLiked ? <Icon src={`${process.env.PUBLIC_URL}/img/like_active.png`} alt="좋아요" onClick={ClickEvent}/> : <Icon src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" onClick={ClickEvent}/>}
                            {<Like>{liked}</Like>}
                        </Div>
                    </Div>
                    <Comment comment={value.comment} bandname={bandname} postId={value.postIndex} reply={value.reply} post={community}/>
                </Div>
                )
                })}
        </Div>
    );
};

const ProfileImg = styled.img`
    width:40px;
    margin-right:10px;
`
const Icon = styled.img`
    width:18px;
`

const Like = styled.div`
    margin-left:5px;
    color:#3185FC;
`
export default PostDetailBox;