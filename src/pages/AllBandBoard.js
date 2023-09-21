import React from "react";
import Header from "../components/common/Header";
import AllBandNav from "../components/band/AllBandNav";
import PostListBox from "../components/write/PostListBox";
import PostRow from "../components/write/PostRow";
import BandHeader from "../components/band/BandHeader";

import { Div } from "../styled/ProjectStyle";

import { useParams } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { postRowState } from "../recoil/FrontRecoil";

const AllBandBoard = () => {
    const { bandname } = useParams();
    const postRow = useRecoilValue(postRowState);

    return (
        <div>
            <Header/>
            <BandHeader bandname={bandname}/>
            <Div margin="30px 0 0 0">
                <AllBandNav bandname={bandname}/> {/* 내비게이션 메뉴 */}
                <Div margin="0 80px" width="100%" display="block">
                    <PostRow
                    title={postRow[0].label}
                    writer={postRow[1].label}
                    createDate={postRow[2].label}
                    view={postRow[3].label}
                    like={postRow[4].label}
                    /> {/* 제목, 작성자, 작성날짜, 조회수, 좋아요 줄 */}
                    <PostListBox bandname={bandname}/> {/* 게시물 목록 출력 */}
                </Div>
            </Div>
        </div>
    );
};

export default AllBandBoard;