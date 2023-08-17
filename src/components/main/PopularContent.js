import React from 'react'
import { styled } from "styled-components";
const PopularList = () => {
    return(
        <Content>
            <div>1</div>
            <div>인기게시글 어쩌고저쩌고 샬라샬라</div>
            <div>실리카겔 게시판</div>
            <div>250</div>
        </Content>
    )
}

const Content = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:10px 25px;
`

export default PopularList;