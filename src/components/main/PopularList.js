import React from 'react'
import  styled from "styled-components";
import { Align } from "../../styled/ProjectStyle";
import Posts from "./Posts"

import { useRecoilValue } from 'recoil';
import { postState } from '../../recoil/BackRecoil';

const PopularList = (props) => {
  const { category } = props;
  const post = useRecoilValue(postState);
  return (
    <Box>
      <Title>{category}</Title>
      {post.map((v,i)=>(
        <Posts key={i} number={v.number} postTitle={v.postTitle} boardName={v.boardCategory} like={v.like}/>
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


export default PopularList
