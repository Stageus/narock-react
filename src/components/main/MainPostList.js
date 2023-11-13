import React from 'react';
import styled from "styled-components";
import { Align, Div } from "../../styled/ProjectStyle";
import Posts from "./Posts"

const MainPostList = (props) => {
  const { category ,post } = props;
  console.log("메인포스트 출력",post)
  
  return (
    <Box>
      <Title>{category}</Title>
      {post && post.length > 0? 
        post.map((v,i)=>(
          <Posts key={i} postTitle={v.postTitle} date={v.postTimestamp} postId={v.postIndex} categoryNumber={v.postCategory} bandName={v.bandName} bandIndex={v.bandIndex}/>
        ))
        :
        <Div justifycontent="center" margin="10px">게시물이 없습니다.</Div>
      }
    </Box>
  )
}

const Box = styled.div`
    width: 595px;
    height:fit-content;
    border: 1px solid #ADBDFF;
    color: #222A68;
    margin-bottom:20px;
`
const Title = styled(Align)`
    font-size:20px;
    font-weight:bold;
    background-color: #E0E6FF;
    height:55px;
    margin:0;
    justify-content:center;
    align-items:center;
    color:#3185FC;
`

export default MainPostList
