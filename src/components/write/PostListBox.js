import React, { useState } from "react";
import Paging from "../Paging";
import SearchBox from "../common/SearchBox";
import Posts from "../main/Posts"
import {useRecoilValue} from 'recoil';
import styled from "styled-components";
import { Button } from "../../styled/ProjectStyle";
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const PostListBox = (props) => {
    const { bandname, posts } = props;
    const params = useParams();
    console.log("params",params)
    const location = useLocation();
    const bandnameEncoded = decodeURI(window.location.pathname); 
    const domainCategory = bandnameEncoded.split('/');

    const sortedPost = [...posts].sort((a,b)=>b.postIndex - a.postIndex)
    // const post = sortedPost.filter(p => `/allband/${domainCategory[2]}/${domainCategory[3]}` === location.pathname);
    console.log(sortedPost)
    const post = sortedPost.filter(p=>params === p.bandName)
    // console.log(`/${domainCategory[2]}/${domainCategory[3]}`)

    console.log("location pathname 값",location.pathname)
    console.log("location 인코딩값",bandnameEncoded)

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
            { sortedPost && sortedPost.length > 0 ?
              sortedPost.map((v)=>(
                <Posts
                key={v}
                bandname={bandname} 
                postId={v.postIndex}
                postTitle={v.postTitle} 
                writer={v.postWriter}
                like={v.like}
                view={v.postViews}
                date={v.postTimestamp}
                content={v.postContent}
                boardName={v.boardName}
                /> 
            )) : 
            <Text>작성 된 게시물이 없습니다.</Text>}
            <Paging
            activePage={page}
            setPage={setPage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={displayedPosts.length}
            />
            <Button value="글쓰기" onClick={()=>{navigate('/write')}}/>
            <SearchBox/>
        </div>
     );
}

const Text = styled.div`
    text-align:center;
    margin:10px 0px;
`
export default PostListBox;