import React, { useEffect, useState } from 'react'
import { styled } from "styled-components";
import { Div } from '../../styled/ProjectStyle';
import { useNavigate,useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const Posts = (props) => {
    const {postTitle,boardName,like,date,view,writer,postId, categoryNumber, bandName, bandIndex,domain} = props;
    // const { bandname } = useParams();
    // console.log("밴드이름",bandname)
    // console.log(bandName,bandIndex)
    const navigate = useNavigate();
    const [bandData, setBandData] = useState([]);
    const handlePostClick = () => {
        console.log("categorynumber",categoryNumber)
        navigate(`notice/${postId}`)
        //  if (bandIndex === 1) {
        //     if(categoryNumber === 0)
        //     {navigate(`notice/${postId}`)}
        //     else if(categoryNumber === 4 ){
        //         navigate(`news/${postId}`)
        //     }
        //     else if(categoryNumber === 5 ){
        //         navigate(`community/${postId}`)
        //     }
        // } 
        // else {
        //     if (categoryNumber === 0) {
        //         navigate(`/allband/${bandName}/notice/${postId}`);
        //     }else if (categoryNumber === 1) {
        //         navigate(`/allband/${bandName}/concertinfo/${postId}`);
        //     } else if (categoryNumber === 2) {
        //         navigate(`/allband/${bandName}/gallery/${postId}`);
        //     } else if (categoryNumber === 3) {
        //         navigate(`/allband/${bandName}/freeboard/${postId}`);
        //     } else if (categoryNumber === 4) {
        //         navigate(`/allband/${bandName}/news/${postId}`);
        //     } else if (categoryNumber === 5) {
        //         navigate(`/allband/${bandName}/community/${postId}`);
        //     }
        // }
    };
    return(
        <Box>
                <List borderbottom="2px solid #e2e8ff" margin="0"
                    onClick={handlePostClick}
                >
                    {/* {postId && <GridItem>{postId}</GridItem>} */}
                    {postTitle && <Title>{postTitle}</Title>}
                    {boardName && <GridItem>{boardName}</GridItem>}
                    {writer && <GridItem>{writer}</GridItem>}
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

const List = styled.div`
    cursor:pointer;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(10%, auto));
    /* grid-template-rows:minmax(100px, auto); */
    font-size:14px;
    &:hover {
        background-color:#E0E6FF;
    }
`

const GridItem = styled.div`
    white-space:nowrap;
    /* overflow:hidden; */
    text-overflow: ellipsis;
    margin:10px;
    padding:0;
    text-align:center;
    grid-column:auto;
`


const Title = styled(GridItem)`
    grid-column : 1/span 2;
    text-align:left;
`

export default Posts