import React from 'react';
import styled from "styled-components";
import { Align } from "../../styled/ProjectStyle";
import RecentContent from "./RecentContent"
const RecentList = () => {
  return (
    <Box>
      <Title>새소식</Title>
      <ContentAlign>
        <RecentContent/>
        <RecentContent/>
        <RecentContent/>
        <RecentContent/>
      </ContentAlign>
    </Box>
  )
}

const Box = styled.div`
    width: 511px;
    height:fit-content;
    border: 1px solid #ADBDFF;
    margin: 20px;
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

const ContentAlign = styled(Align)`
  display:flex;
  flex-direction:column;
`

export default RecentList
