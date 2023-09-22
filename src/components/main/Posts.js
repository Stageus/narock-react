import React from 'react'
import { styled } from "styled-components";
import { Div } from '../../styled/ProjectStyle';

const Posts = (props) => {

    const {bandname,postTitle,boardName,like,date,view,writer,postId,domain} = props;

    // const navigate = useNavigate();
    return(
        <Box>
            {/* <Link to={`${domain}/${postId}`}> */}
                <Div borderbottom="2px solid #e2e8ff" margin="0">
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