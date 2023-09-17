import React from "react";
import Paging from "../Paging";
import SearchBox from "../common/SearchBox";
import Posts from "../main/Posts"
import {useRecoilValue} from 'recoil';
import { postState } from '../../recoil/BackRecoil';
import styled from "styled-components";
import { Button } from "../../styled/ProjectStyle";
import { useNavigate } from 'react-router-dom';

const PostListBox = (props) => {
    const { bandname } = props;
    const post = useRecoilValue(postState);
    const posts = post.filter(p=>p.boardName === bandname);
    const sortedPost = [...posts].sort((a,b)=>b.postId - a.postId)
    
    const navigate = useNavigate();

    return ( 
        <div>
            { sortedPost && sortedPost.length > 0 ?
              sortedPost.map((v)=>(
                <Posts 
                key={v}
                bandname={bandname} 
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