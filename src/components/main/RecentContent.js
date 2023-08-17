import React from 'react'
import {styled} from "styled-components";
const RecentContent = () => {
    return(
        <Content>
            <div>인기게시글 어쩌고저쩌고 샬라샬라</div>
            <div>2023.08.10</div>
        </Content>
    )
}

const Content = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    margin:15px 25px;
    align-items:center;
`

export default RecentContent;