import React, { useState } from "react";
import styled from 'styled-components';
import { Align,Button } from "../../styled/ProjectStyle";
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { postState } from '../../recoil/BackRecoil';
import { useNavigate } from "react-router-dom";

const PostDetail = () => {
    const navigate = useNavigate();
    const { bandname } = useParams();

    const posts = useRecoilValue(postState); // postState 셀렉터로 데이터 가져옴
    const post = posts.find(p => p.boardName === bandname);

    const [liked,setLiked] = useState(0);
    const [isLiked,setIsLiked] = useState(false);
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
            <div>{post.boardName}</div>
            <div>{post.postTitle}</div>
            <AlignBox>
                <Align>
                    <FlexItem>프로필사진</FlexItem>
                    <FlexItem>{post.writer}</FlexItem>
                    <FlexItem>{post.view}</FlexItem>
                    <FlexItem>{post.date}</FlexItem>
                    <FlexItem>댓글갯수</FlexItem>
                </Align>
                <Align>
                    <Button value="수정" backgroundcolor="white" color="#3185FC" border="1px solid #3185FC"/>
                    <Button value="삭제"backgroundcolor="white" color="#3185FC" border="1px solid #3185FC"/>
                    <Button value="목록" type="button" onClick={()=>{navigate(`/allband/${bandname}/notice`)}}/>
                </Align>
            </AlignBox>
            <ContentBox>{post.content}</ContentBox>
            <Align>
                {isLiked ? <Icon src={`${process.env.PUBLIC_URL}/img/like_active.png`} alt="좋아요" onClick={ClickEvent}/> : <Icon src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" onClick={ClickEvent}/>}
                <Like>{liked}</Like>
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
export default PostDetail;