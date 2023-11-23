import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Div } from "../../styled/ProjectStyle";
import Posts from "../main/Posts";
import PostRow from "../write/PostRow";

import { useRecoilValue } from 'recoil';
import { postRowState } from '../../recoil/FrontRecoil'
import Paging from "../Paging";
import SearchBox from "./SearchBox";
import axios from "axios";


const SearchResult = (props) => {
    const { searchParams } = props;
    const postRow = useRecoilValue(postRowState)
    const searchKeyword = searchParams.get('query');
    const [searchResult, setSearchResult] = useState([])
    console.log(searchKeyword)
    useEffect(()=>{
        axios.get("https://www.narock.site/post/search",
        {
            // withCredentials: true,
            params:{
                "filter": 0,
                "bandIndex": null,
                "searchKeyword": searchKeyword,
                "pages": 1
            }
        }
        )
        .then(function (response) {
            console.log(response)
            setSearchResult(response.data.data.searchResult[0])
            console.log(searchResult)
        }).catch(function (error) {
            console.log(error)
        })
    },[])


    return(
        <div>
            <Result>"{searchParams.get('query')}"의 검색 결과입니다.</Result>
            <TableBox>
                <PostRow 
                title={postRow[0].label}
                writer={postRow[1].label}
                createDate={postRow[2].label}
                view={postRow[3].label}
                like={postRow[4].label}
                />
                {searchResult ? searchResult.map((v,i)=>(
                    <Posts
                        // postId={v.postindex}
                        postTitle={v.posttitle}
                        view={v.postviews}
                        like={v.postlikes}
                        writer={v.postwriter}
                        date={v.posttimestamp}
                    />
                )):
                <div>게시글이 없습니다.</div>
                }
                <Paging/>
            </TableBox>
                <Button value="글쓰기"/>
                <SearchBox searchParams={searchParams.get('query')}/>
            </div>
    )
}

const Result = styled.p`
    font-size:24px;
`
const TableBox = styled.table`
    padding:0 70px;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`
export default SearchResult;