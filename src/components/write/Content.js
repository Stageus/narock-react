import React, { useState } from "react";
import styled from 'styled-components';
import { Align,Button } from "../../styled/ProjectStyle";

const Content = () => {
    const [like,setLike] = useState(0);
    const [isLiked,setIsLiked] = useState(false);
    const ClickEvent = () =>{
        if(isLiked){
            setLike(like - 1);
        }else{
            setLike(like + 1);
        }
        setIsLiked(!isLiked);

    }
    return (
        <Box>
            <div>메뉴 이름</div>
            <div>제목</div>
            <AlignBox>
                <Align>
                    <FlexItem>프로필사진</FlexItem>
                    <FlexItem>닉네임</FlexItem>
                    <FlexItem>조회수</FlexItem>
                    <FlexItem>날짜</FlexItem>
                    <FlexItem>댓글 갯수</FlexItem>
                </Align>
                <Align>
                    <Button value="수정" width="38px" backgroundcolor="white" color="#3185FC" border="1px solid #3185FC"/>
                    <Button value="삭제" width="38px" backgroundcolor="white" color="#3185FC" border="1px solid #3185FC"/>
                    <Button value="목록" width="38px"/>
                </Align>
            </AlignBox>
            <ContentBox>GINGER ROOT</ContentBox>
            <Align>
                {isLiked ? <Icon src={`${process.env.PUBLIC_URL}/img/like_active.png`} alt="좋아요" onClick={ClickEvent}/> : <Icon src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" onClick={ClickEvent}/>}
                <Like>{like}</Like>
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
export default Content;