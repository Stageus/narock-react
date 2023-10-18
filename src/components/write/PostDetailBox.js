import React from "react";
import styled from 'styled-components';
import { Button, Div } from "../../styled/ProjectStyle";

import { useRecoilState } from 'recoil';

import { isLikedState, likedState } from "../../recoil/FrontRecoil";
import Comment from "./Comment";
import { useNavigate , useParams } from "react-router-dom";

const PostDetailBox = (props) => {
    const { postid } = useParams();
    const domain = decodeURI(window.location.pathname);
    const domainSplit = domain.split('/');
    const domainRemove = domainSplit.pop(); // domainSplit 맨 마지막 배열 삭제용
    const keywordsToCheck = ['notice', 'community', 'concertinfo', 'news', 'gallery'];
    const foundKeywords = keywordsToCheck.filter(keyword => domainSplit.includes(keyword)).join(',');
    
    console.log(foundKeywords)

    const { 
        bandname,
        post
        // comment
    } = props;
    
    //글번호, 카테고리 일치하는 게시물만 불러오기
    const posts = post.filter(
        p => p.postIndex === parseInt(postid) && p.postCategory === foundKeywords);
        

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
    return (
        <Div width="100%" margin="0">
            {posts.length > 0 &&  posts.map((value,idx)=>{
                return(
                <Div key={idx} width="100%" display="block" margin="0 80px">
                    <Div padding="20px" border="1px solid #E2E8FF" display="block" margin="0 0 20px 0">
                        <div>
                            {value.postCategory === "notice"
                            ? "공지사항"
                            : value.postCategory === "concertinfo"
                            ? "공연 정보"
                            : value.postCategory === "gallery"
                            ? "갤러리"
                            : value.postCategory === "community"
                            ? "자유 게시판"
                            : value.postCategory === "news"
                            ? "새소식"
                            : value.postCategory === "community"
                            ? "커뮤니티"
                            : value.bandName}
                        </div>
                        <div>{value.postTitle}</div>
                        <Div display="flex" justifycontent="space-between" margin="0">
                            <Div display="flex" alignitems="center" margin="0">
                                <ProfileImg src={value.postImgUrl} alt="프로필 사진"/>
                                <Div margin="0 10px 0 0">{value.postWriter}</Div>
                                <Div margin="0 10px 0 0">{value.postViews}</Div>
                                <Div margin="0 10px 0 0">{value.postTimestamp}</Div>
                                <Div margin="0 10px 0 0">{value.comment.length+value.reply.length}</Div>
                            </Div>
                            <Div display="flex" alignitems="center">
                                <Button value="수정" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                                <Button value="삭제" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                                <Button value="목록" type="button" onClick={GoToList}/>
                            </Div>
                        </Div>
                        <Div margin="20px 0">{value.postContent}</Div>
                        <Div display="flex" alignitems="cetnter" margin="0">
                            {isLiked ? <Icon src={`${process.env.PUBLIC_URL}/img/like_active.png`} alt="좋아요" onClick={LikeClickEvent}/> : <Icon src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" onClick={LikeClickEvent}/>}
                            {<Like>{liked}</Like>}
                        </Div>
                    </Div>
                    <Comment comment={value.comment} bandname={bandname} postId={value.postIndex} reply={value.reply} post={posts}/>
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
    cursor:pointer;
`

const Like = styled.div`
    margin-left:5px;
    color:#3185FC;

`
export default PostDetailBox;