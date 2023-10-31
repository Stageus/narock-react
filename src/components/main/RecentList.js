import React from 'react';
import styled from "styled-components";
import { Align } from "../../styled/ProjectStyle";
import Posts from "./Posts"

import {useRecoilValue} from 'recoil';
import { popularPostState } from '../../recoil/BackRecoil';

const RecentList = () => {

  const popularPost= useRecoilValue(popularPostState);
  return (
    <Box>
      <Title>공지 사항</Title>
      {popularPost.map((v,i)=>(
        <Posts key={i} postTitle={v.postTitle} date={v.postTimestamp}/>
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
`

export default RecentList
