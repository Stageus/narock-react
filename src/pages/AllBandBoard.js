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
import { postState } from "../recoil/BackRecoil";
import axios from "axios";

const AllBandBoard = () => {
    const { bandname } = useParams();
    const [postData, setPostData] = useState([]);
    const navigate = useNavigate();
    const category = decodeURI(window.location.pathname); 
    const domainCategory = category.split('/')[3];
    const domainPostIdx = category.split('/')[4];

    const postRow = useRecoilValue(postRowState);
    const posts = useRecoilValue(postState);
    const post = posts.filter(p=>p.bandName === bandname && p.boardCategory === domainCategory);
    
    useEffect(()=>{
        axios.get("https://www.narock.site/post/all",
        {
            withCredentials: true,
            params:{
                postCategory:0,
                bandIndex:1,
                pages:1
            }
        }
        )
        .then(function (response) {
             console.log(response)
             setPostData(response.data.post)
             console.log(postData)
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    },[])

    return (
        <div>
            <Header/>
            <BandHeader bandname={bandname}/>
            <Div margin="30px 0 0 0" alignitems="baseline">
                <AllBandNav bandname={bandname}/> {/* 내비게이션 메뉴 */}
                <Div margin="0 80px" width="100%" display="block">
                    {category.includes(domainPostIdx)? 
                        <PostDetailBox bandname={bandname} post={posts} onClick={()=>{navigate(`${category}`)}}/>
                    :
                    <React.Fragment>
                    <PostRow
                    title={postRow[0].label}
                    writer={postRow[1].label}
                    createDate={postRow[2].label}
                    view={postRow[3].label}
                    like={postRow[4].label}
                    /> 
                    {/* <PostListBox bandname={bandname} posts={post} category={domainCategory}/> */}
                    <PostListBox bandname={bandname} posts={postData} category={domainCategory}/>
                    </React.Fragment>
                }
                </Div>
            </Div>
        </div>
    );
};

export default AllBandBoard;