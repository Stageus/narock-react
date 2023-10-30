import React from "react";
import styled from 'styled-components';
import { Button, Div } from "../../styled/ProjectStyle";

import { useRecoilState, useRecoilValue } from 'recoil';

import { isLikedState, likedState } from "../../recoil/FrontRecoil";

import { useNavigate , useParams } from "react-router-dom";
import CommentBox from "./CommentBox";

const PostDetailBox = (props) => {
    const { postid } = useParams();
    const domain = decodeURI(window.location.pathname);
    const domainSplit = domain.split('/');
    const domainRemove = domainSplit.pop(); // domainSplit 맨 마지막 배열 삭제용
    const keywordsToCheck = ['notice', 'community', 'concertinfo', 'news', 'gallery'];
    const foundKeywords = keywordsToCheck.filter(keyword => domainSplit.includes(keyword)).join(',');
    
    // console.log(foundKeywords)

    const { bandname,post } = props;
    // console.log(post)
    
    //글번호, 카테고리 일치하는 게시물만 불러오기
    const posts = post.filter(
        // p => p.postindex === parseInt(postid) && p.boardCategory === foundKeywords);
        p => p.postindex === parseInt(postid));
        

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
                            {value.postcategory === 0
                            ? "공지사항"
                            : value.postcategory === 1
                            ? "공연 정보"
                            : value.postcategory === 2
                            ? "갤러리"
                            : value.postcategory === 3
                            ? "자유 게시판"
                            : value.postcategory === 4
                            ? "새소식"
                            : value.postcategory === 5
                            ? "커뮤니티"
                            : value.bandindex}
                        </div>
                        <div>{value.posttitle}</div>
                        <Div display="flex" justifycontent="space-between" margin="0">
                            <Div display="flex" alignitems="center" margin="0">
                                <ProfileImg src={value.postimgurl} alt="프로필 사진"/>
                                <Div margin="0 10px 0 0">{value.postwriter}</Div>
                                <Div margin="0 10px 0 0">{value.postviews}</Div>
                                <Div margin="0 10px 0 0">{value.posttimestamp}</Div>
                                <Div margin="0 10px 0 0">댓글 {value.comment.length+value.reply.length}</Div>
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
                    <CommentBox comment={value.comment} bandname={bandname} postId={value.postIndex} reply={value.reply} post={posts}/>
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