import React, { useEffect, useState } from "react";

import Header from "../components/common/Header";
import AllBandNav from "../components/band/AllBandNav";
import PostListBox from "../components/write/PostListBox";
import PostRow from "../components/write/PostRow";
import BandHeader from "../components/band/BandHeader";
import PostDetailBox from "../components/write/PostDetailBox";

import { Div } from "../styled/ProjectStyle";

import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { postRowState } from "../recoil/FrontRecoil";
import axios from "axios";
import { bandDataState } from "../recoil/BackRecoil";
import styled from "styled-components";

const AllBandBoard = () => {
    const { bandname } = useParams();
    const bandData = useRecoilValue(bandDataState);
    const [postData, setPostData] = useState([]);
    const navigate = useNavigate();
    const category = decodeURI(window.location.pathname); 

    const domainCategory = category.split('/')[3];
    const domainIdx = category.split('/')[4];
    
    const bandFilter = bandData.filter(data=>data.bandname === bandname) //밴드 이름으로 필터링
    const bandIndex = bandFilter.length > 0 ? bandFilter[0].bandindex : null;
    const postRow = useRecoilValue(postRowState);

    let categoryIndex = '';

    if (domainCategory === 'notice') {
        categoryIndex = 0;
    } else if (domainCategory === 'concertinfo') {
        categoryIndex = 1;
    } else if (domainCategory === 'gallery') {
        categoryIndex = 2;
    }else if (domainCategory === 'freeboard') {
        categoryIndex = 3;
    }else if (domainCategory === 'news') {
        categoryIndex = 4;
    }else if (domainCategory === 'community') {
        categoryIndex = 5;
    }


    useEffect(()=>{
        axios.get("https://www.narock.site/post/all",
        {
            withCredentials: true,
            params:{
                postCategory:categoryIndex,
                bandIndex:bandIndex,
                pages:1
            }
        }
        )
        .then(function (response) {
            console.log(response)
            setPostData(response.data.post[0])
        })
    },[categoryIndex,bandIndex])

    return (
        <div>
          <Header />
          <BandHeader bandname={bandname} />
          <Div margin="30px 0 0 0" alignitems="baseline">
            <AllBandNav bandname={bandname} /> {/* 내비게이션 메뉴 */}
            <Div margin="0 80px" width="100%" display="block">
              <TableBox>
                    {postData && domainIdx ? 
                    postData.map((post)=>(
                        domainIdx && domainIdx.includes(post.postindex) ? <PostDetailBox /> : null
                    ))
                    :
                    <>
                        <PostRow title={postRow[0].label} writer={postRow[1].label} createDate={postRow[2].label} view={postRow[3].label} like={postRow[4].label} />
                        <PostListBox bandname={bandname} posts={postData} category={domainCategory}/>
                    </>
                    }
              </TableBox>
            </Div>
          </Div>
        </div>
      );
};

const TableBox = styled.table`
    padding:0 70px;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`

export default AllBandBoard;