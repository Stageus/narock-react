import React, { useState } from "react";
import Paging from "../Paging";
import SearchBox from "../common/SearchBox";
import Posts from "../main/Posts"
import styled from "styled-components";
import { Button, Div } from "../../styled/ProjectStyle";
import { useNavigate } from 'react-router-dom';

const PostListBox = (props) => {
    const { bandname, posts, category, bandIndex, currentPage, setCurrentPage, totalPages,totalItemsCount} = props;
    const sortedPost = [...posts].sort((a,b)=>b.postindex - a.postindex)
    console.log(sortedPost)
    const navigate = useNavigate();
    return ( 
        <div>
            { sortedPost.length > 0 ?
              sortedPost[0].map((v,i)=>(
                <Posts
                key={v.postindex}
                bandname={bandname} 
                postId={v.postindex}
                postTitle={v.posttitle} 
                writer={v.postwriter}
                like={v.postlikes}
                view={v.postviews}
                date={v.posttimestamp}
                content={v.postcontent}
                categoryNumber={v.postcategory}
                domain={category}
                
                /> 
            )) 
            : 
            <Text>작성 된 게시물이 없습니다.</Text>}
            {/* <Paging
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={sortedPost.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            /> */}
            {bandname ? 
            <Button value="글쓰기" onClick={()=>{navigate(`/write?bandname=${bandname}&category=${category}&bandindex=${bandIndex}`)}}/>
            :    
            <Button value="글쓰기" onClick={()=>{navigate(`/write?category=${category}`)}}/>
        }
            <SearchBox/>
        </div>
     );
}

const Text = styled.div`
    text-align:center;
    margin:10px 0px;
`
export default PostListBox;