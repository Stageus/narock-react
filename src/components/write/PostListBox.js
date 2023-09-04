import React from "react";
import Paging from "../Paging";
import SearchBox from "../common/SearchBox";
import Posts from "../main/Posts"
import {useRecoilValue} from 'recoil';
import { postState } from '../../recoil/Recoil';
import styled from "styled-components";

const PostListBox = (props) => {
    const { bandname } = props;
    const post = useRecoilValue(postState);
    const posts = post.filter(p=>p.boardName === bandname);

    const sortedPost = [...posts].sort((a,b)=>b.postId - a.postId)
    
    return ( 
        <div>
            { sortedPost && sortedPost.length > 0 ?
              sortedPost.map((v,i)=>(
                <Posts 
                bandname={bandname} 
                key={i}
                postId={v.postId}
                postTitle={v.postTitle} 
                writer={v.writer}
                like={v.like}
                view={v.view}
                date={v.date}
                content={v.content}
                /> 
            )) : 
            <Text>작성 된 게시물이 없습니다.</Text>}
            <Paging/>
            <SearchBox/>
        </div>
     );
}

const Text = styled.div`
    text-align:center;
    margin:10px 0px;
`
export default PostListBox;