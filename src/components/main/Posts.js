import React, { useEffect, useState } from 'react'
import { styled } from "styled-components";
import { Div } from '../../styled/ProjectStyle';
import { useNavigate,useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const Posts = (props) => {
    const {postTitle,boardName,like,date,view,writer,postId, categoryNumber, bandIndex, bandName} = props;
    // const { bandname } = useParams();
    // console.log("밴드이름",bandname)
    console.log(categoryNumber)
    // console.log(ban)
    const navigate = useNavigate();
    const [bandData, setBandData] = useState([]);
    const handlePostClick = () => {
         if (!bandIndex || bandIndex === 1) {
            if(categoryNumber === 0)
            {navigate(`/notice/${postId}`)}
            if(categoryNumber === 4 ){
                navigate(`/news/${postId}`)
            }
            if(categoryNumber === 5 ){
                navigate(`/community/${postId}`)
            }
        } 
        else {
            if (categoryNumber === 0) {
                navigate(`/allband/${bandName}/notice/${postId}`);
            }if (categoryNumber === 1) {
                navigate(`/allband/${bandName}/concertinfo/${postId}`);
            }if (categoryNumber === 2) {
                navigate(`/allband/${bandName}/gallery/${postId}`);
            }if (categoryNumber === 3) {
                navigate(`/allband/${bandName}/freeboard/${postId}`);
            }if (categoryNumber === 4) {
                navigate(`/allband/${bandName}/news/${postId}`);
            }if (categoryNumber === 5) {
                navigate(`/allband/${bandName}/community/${postId}`);
            }
        }
    };
    return(
        <Box>
                <List borderbottom="2px solid #e2e8ff" margin="0"
                    onClick={handlePostClick}
                >
                    {/* {postId && <GridItem>{postId}</GridItem>} */}
                    {postTitle && <Title>{postTitle}</Title>}
                    {boardName && <GridItem>{boardName}</GridItem>}
                    {writer && <Writer>{writer}</Writer>}
                    {date && <GridItem>{date.substring(0,10)}</GridItem>}
                    {view && <GridItem>{view}</GridItem>}
                    {like && <GridItem>{like}</GridItem>}
                </List>
        </Box>
    )
}

const Box = styled.div`
    width:100%;
`

const List = styled.tr`
    cursor:pointer;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:14px;
    padding:5px;
    &:hover {
        background-color:#E0E6FF;
    }
`

const GridItem = styled.td`
    white-space:nowrap;
    /* overflow:hidden; */
    /* text-overflow: ellipsis; */
    margin:10px;
    padding:0;
    /* width:10%; */
    text-align:center;
    flex:1;
    width:fit-content;
    /* grid-column:auto; */
`


const Title = styled.td`
    width:60%;
    /* font-size:14px; */
`
const Writer = styled.td`
    width:15%;
`
export default Posts