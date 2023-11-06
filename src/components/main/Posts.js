import React, { useEffect } from 'react'
import { styled } from "styled-components";
import { Div } from '../../styled/ProjectStyle';
import { useNavigate,useLocation } from 'react-router-dom';

const Posts = (props) => {

    const {bandname,postTitle,boardName,like,date,view,writer,postId, categoryNumber} = props;
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        // console.log(location);
      }, [ location ])
    const handlePostClick = () => {
        const domain = location.pathname;
        console.log(categoryNumber)
        // 클릭한 PostRow의 postId를 사용하여 해당 게시물 페이지로 이동
        if(categoryNumber){
            if(categoryNumber === 0) {
                navigate(`/notice/${postId}`);
            }
            if(categoryNumber === 1) {
                navigate(`/concertinfo/${postId}`);
            }
            if(categoryNumber === 2) {
                navigate(`/gallery/${postId}`);
            }
            if(categoryNumber === 3){
                navigate(`/freeboard/${postId}`);
            }
            if(categoryNumber === 4){
                navigate(`/news/${postId}`);
            }
            if(categoryNumber === 5){
                navigate(`/community/${postId}`);
            }
        }else{
            navigate(`${domain}/${postId}`);
        }

    };
    // const handlePostClick = () => {
    //     const domain = location.pathname;
    //     console.log("도메인",domain)
    //     // 클릭한 PostRow의 postId를 사용하여 해당 게시물 페이지로 이동
    //     if(categoryNumber === 0 && domain === '/notice') {
    //         navigate(`notice/${postId}`);
    //     }
    //     if(categoryNumber === 1) {
    //         navigate(`concertinfo/${postId}`);
    //     }
    //     if(categoryNumber === 2) {
    //         navigate(`gallery/${postId}`);
    //     }
    //     if(categoryNumber === 3){
    //         navigate(`freeboard/${postId}`);
    //     }
    //     if(categoryNumber === 4){
    //         navigate(`news/${postId}`);
    //     }
    //     if(categoryNumber === 5){
    //         navigate(`community/${postId}`);
    //     }
    // };
    return(
        <Box>
                <List borderbottom="2px solid #e2e8ff" margin="0"
                    onClick={handlePostClick}
                >
                    {postId && <Div>{postId}</Div>}
                    {postTitle && <OverflowDiv>{postTitle}</OverflowDiv>}
                    {boardName && <OverflowDiv>{boardName}</OverflowDiv>}
                    {writer && <SmallDiv>{writer}</SmallDiv>}
                    {date && <SmallDiv>{date}</SmallDiv>}
                    {view && <SmallDiv>{view}</SmallDiv>}
                    {like && <SmallDiv>{like}</SmallDiv>}
                </List>
            {/* </Link> */}
        </Box>
    )
}

const Box = styled.div`
    width:100%;
`

const OverflowDiv = styled(Div)`
    width:20%;
    height:50px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    margin:0;
    margin-left:5%;
    padding:0;
    text-align:center;
`

const SmallDiv = styled(Div)`
    width:7%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    margin:0 auto;
    padding:0;
    text-align:center;
`

const List = styled(Div)`
    cursor:pointer;
`

export default Posts