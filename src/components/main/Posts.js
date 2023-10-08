import React, { useEffect } from 'react'
import { styled } from "styled-components";
import { Div } from '../../styled/ProjectStyle';
import { useNavigate,useLocation } from 'react-router-dom';

const Posts = (props) => {

    const {bandname,postTitle,boardName,like,date,view,writer,postId,domain} = props;
    const postIdx = parseInt(postId)
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        console.log(location);
      }, [ location ])
    const handlePostClick = () => {
        // 클릭한 PostRow의 postId를 사용하여 해당 게시물 페이지로 이동
        navigate(`${location.pathname}/${postIdx}`);
        console.log("dd")
    };
    return(
        <Box>
            {/* <Link to={`${domain}/${postId}`}> */}
                <Div borderbottom="2px solid #e2e8ff" margin="0"
                    onClick={handlePostClick}
                >
                    {postId && <Div>{postId}</Div>}
                    {postTitle && <OverflowDiv>{postTitle}</OverflowDiv>}
                    {boardName && <OverflowDiv>{boardName}</OverflowDiv>}
                    {writer && <SmallDiv>{writer}</SmallDiv>}
                    {date && <SmallDiv>{date}</SmallDiv>}
                    {view && <SmallDiv>{view}</SmallDiv>}
                    {like && <SmallDiv>{like}</SmallDiv>}
                </Div>
            {/* </Link> */}
        </Box>
    )
}

const Box = styled.div`
    width:100%;
`

const OverflowDiv = styled(Div)`
    width:20%;
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


export default Posts