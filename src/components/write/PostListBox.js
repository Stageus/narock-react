import React, { useState } from "react";
import Paging from "../Paging";
import SearchBox from "../common/SearchBox";
import Posts from "../main/Posts"
import {useRecoilValue} from 'recoil';
import { postState } from '../../recoil/BackRecoil';
import styled from "styled-components";
import { Button } from "../../styled/ProjectStyle";
import { useNavigate, useLocation,useParams } from 'react-router-dom';

const PostListBox = (props) => {
    const { bandname, posts } = props;
    const location = useLocation();
    const bandnameEncoded = decodeURI(window.location.pathname); 
    const bandnames = bandnameEncoded.indexOf(bandname)
    console.log(bandnames)
    const sortedPost = [...posts].sort((a,b)=>b.postId - a.postId)
    const post = sortedPost.filter(p => `/${p.boardName}` === location.pathname);
    console.log(bandnameEncoded)

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
            { post && post.length > 0 ?
              post.map((v)=>(
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