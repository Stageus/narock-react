import React from 'react'
import  styled from "styled-components";
import { Align } from "../../styled/ProjectStyle";
import PopularContent from "./PopularContent"

const PopularList = () => {
  return (
    <Box>
      <Title>인기 게시글</Title>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
        <PopularContent/>
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


export default PopularList
