import React from 'react';
import styled from "styled-components";
import { Align } from "../../styled/ProjectStyle";
import Posts from "./Posts"

const MainPostList = (props) => {
  const { category ,post } = props;
  console.log(post)
  return (
    <Box>
      <Title>{category}</Title>
      {post && post.map((v,i)=>(
        <Posts key={i} postTitle={v.postTitle} date={v.postTimestamp} postId={v.postIndex} categoryNumber={v.postCategory}/>
      ))}
    </Box>
  )
}

const Box = styled.div`
    width: 595px;
    height:fit-content;
    border: 1px solid #ADBDFF;
    color: #222A68;
`
const Title = styled(Align)`
    font-size:20px;
    font-weight:bold;
    background-color: #E0E6FF;
    height:55px;
    margin:0;
    justify-content:center;
    align-items:center;
`

export default MainPostList
