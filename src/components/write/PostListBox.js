import React, { useState } from "react";
import Paging from "../Paging";
import SearchBox from "../common/SearchBox";
import Posts from "../main/Posts"
import {useRecoilValue} from 'recoil';
import styled from "styled-components";
import { Button } from "../../styled/ProjectStyle";
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const PostListBox = (props) => {
    const { bandname, posts, category, bandIndex } = props;
    const sortedPost = [...posts].sort((a,b)=>b.postindex - a.postindex)
    console.log(sortedPost)
    const itemsCountPerPage = 3; // 한 페이지에 표시할 게시물 수
    const [limit, setLimit]= useState(10); 
    const [page, setPage] = useState(1);
    const offset = (page-1)*limit; // 한 페이지에 들어갈 갯수
    const displayedPosts = posts.slice(
        offset, offset + limit
    );
    
    const navigate = useNavigate();

    return ( 
        <div>
            { sortedPost.length > 0 ?
              sortedPost[0].map((v,i)=>(
                <Posts
                key={v.postIndex}
                bandname={bandname} 
                // postId={v.postindex}
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
            <Paging
            activePage={page}
            setPage={setPage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={displayedPosts.length}
            />
            {bandname ? 
            <Button value="글쓰기" onClick={()=>{navigate(`/write?bandname=${bandname}&category=${category}`,{state:bandIndex})}}/>
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