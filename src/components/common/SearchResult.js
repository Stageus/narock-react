import React from "react";
import styled from "styled-components";
import { Button, Div } from "../../styled/ProjectStyle";
import Posts from "../main/Posts";
import PostRow from "../write/PostRow";

import { useRecoilValue } from 'recoil';
import { combinedPostState } from '../../recoil/BackRecoil'
import Paging from "../Paging";
import SearchBox from "./SearchBox";


const SearchResult = (props) => {
    const { searchParams } = props;
    const combinedPost = useRecoilValue(combinedPostState)
    console.log(searchParams)

    const searchResult = combinedPost.filter(
        post => post.postTitle.includes(searchParams.get('query'))||
        post.content.includes(searchParams.get('query'))||
        post.writer.includes(searchParams.get('query'))
        );
    console.log(searchResult)
    return(
        <div>
            <Result>"{searchParams.get('query')}"의 검색 결과입니다.</Result>
            <Div width="100%" display="block">
                <PostRow/>
                {searchResult.map((v)=>(
                    <Posts 
                    postId={v.postId}
                    postTitle={v.postTitle} 
                    writer={v.writer}
                    like={v.like}
                    view={v.view}
                    date={v.date}
                    content={v.content}
                    />
                ))}
                <Paging/>
                <Button value="글쓰기"/>
                <SearchBox searchParams={searchParams.get('query')}/>
            </Div>
        </div>
    )
}

const Result = styled.p`
    font-size:24px;
`

export default SearchResult;