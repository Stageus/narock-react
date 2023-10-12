import React from "react";

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

const AllBandBoard = () => {
    const { bandname } = useParams();
    const navigate = useNavigate();
    const category = decodeURI(window.location.pathname); 
    const domainCategory = category.split('/')[3];
    const domainPostIdx = category.split('/')[4];

    const postRow = useRecoilValue(postRowState);
    const posts = useRecoilValue(postState);
    const post = posts.filter(p=>p.bandName === bandname && p.postCategory === domainCategory);
    console.log(domainPostIdx)
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
                    <PostListBox bandname={bandname} posts={post}/>
                    </React.Fragment>
                }
                </Div>
            </Div>
        </div>
    );
};

export default AllBandBoard;