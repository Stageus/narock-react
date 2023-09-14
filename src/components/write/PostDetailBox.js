import React from "react";
import styled from 'styled-components';
import { Align,Button } from "../../styled/ProjectStyle";

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
        <Box>
            {post.map((value,idx)=>(
                <div key={idx}>
                    <div>{value.boardName}</div>
                    <div>{value.postTitle}</div>
                    <AlignBox>
                        <Align>
                            <FlexItem>프로필사진</FlexItem>
                            <FlexItem>{value.writer}</FlexItem>
                            <FlexItem>{value.view}</FlexItem>
                            <FlexItem>{value.date}</FlexItem>
                            <FlexItem>댓글갯수</FlexItem>
                        </Align>
                        <Align>
                            <Button value="수정" backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                            <Button value="삭제"backgroundcolor="white" color="mainColor" border="1px solid #3185FC"/>
                            <Button value="목록" type="button" onClick={()=>{navigate(`/allband/${bandname}/notice`)}}/>
                        </Align>
                    </AlignBox>
                    <ContentBox>{value.content}</ContentBox>
                    <Comment/>
                </div>
            ))}
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


const AlignBox = styled(Align)`
    justify-content:space-between;
    border-bottom: 1px solid #E2E8FF;
`
const FlexItem = styled.div`
    margin-right:10px;
`

const ContentBox = styled.div`
    margin: 20px 0;
`

const Icon = styled.img`
    width:18px;
`

const Like = styled.div`
    margin-left:5px;
    color:#3185FC;
`
export default PostDetailBox;