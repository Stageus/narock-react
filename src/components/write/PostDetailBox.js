import React from "react";
import styled from 'styled-components';
import { Align,Button, Div } from "../../styled/ProjectStyle";

import { useRecoilValue, useRecoilState } from 'recoil';
import { postState } from '../../recoil/BackRecoil';

import { isLikedState, likedState } from "../../recoil/FrontRecoil";
import Comment from "./Comment";
import { useNavigate , useParams } from "react-router-dom";

const PostDetailBox = (props) => {
    const { postid } = useParams();
    const { bandname } = props;
    const posts = useRecoilValue(postState); // postState 셀렉터로 데이터 가져옴
    const post = posts.filter(p => p.boardName === bandname ); //post의 게시판이름과 bandname이 같은 것만 필터링
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
        <Div width="100%" margin="0 80px" padding="20px" flexDirection="column">
            {post.map((value,idx)=>(
                <div key={idx}>
                    <Div padding="20px" border="1px solid #E2E8FF" display="block" margin="0 0 20px 0">
                        <div>{value.boardName}</div>
                        <div>{value.postTitle}</div>
                        <Div display="flex" justifyContent="space-between" borderBottom="1px solid #E2E8FF" margin="0">
                            <Div display="flex" alignItems="center" margin="0">
                                <Div margin="0 10px 0 0">프로필사진</Div>
                                <Div margin="0 10px 0 0">{value.writer}</Div>
                                <Div margin="0 10px 0 0">{value.view}</Div>
                                <Div margin="0 10px 0 0">{value.date}</Div>
                                <Div margin="0 10px 0 0">댓글갯수</Div>
                            </Div>
                            <Div display="flex" alignItems="center">
                                <Button value="수정" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                                <Button value="삭제"backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                                <Button value="목록" type="button" onClick={()=>{navigate(`/allband/${bandname}/notice`)}}/>
                            </Div>
                        </Div>
                        <Div margin="20px 0">{value.content}</Div>
                        <Div display="flex" alignItems="cetnter" margin="0">
                            {isLiked ? <Icon src={`${process.env.PUBLIC_URL}/img/like_active.png`} alt="좋아요" onClick={ClickEvent}/> : <Icon src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" onClick={ClickEvent}/>}
                            {<Like>{liked}</Like>}
                        </Div>
                    </Div>
                    <Comment/>
                </div>
            ))}
        </Div>
    );
};

const Icon = styled.img`
    width:18px;
`

const Like = styled.div`
    margin-left:5px;
    color:#3185FC;
`
export default PostDetailBox;