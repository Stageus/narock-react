import React from "react";
import Header from "../components/common/Header";
import PostDetailBox from "../components/write/PostDetailBox";
import {useRecoilValue} from 'recoil';
import { newsPostState,commentState, noticePostState, communityPostState, postState } from '../recoil/BackRecoil';

import { Div } from "../styled/ProjectStyle";
const AllPost = ( ) => {
    // const newsPost = useRecoilValue(newsPostState);
    // const noticePost = useRecoilValue(noticePostState);
    // const communityPost = useRecoilValue(communityPostState);
    const post = useRecoilValue(postState);
    const comment = useRecoilValue(commentState);
    return (
        <div>
            <Header/>
            <Div>
                <PostDetailBox 
                // newsPost={newsPost} 
                // noticePost={noticePost} 
                // communityPost={communityPost} 
                post={post}
                Allcomment={comment}/>
            </Div>
        </div>
    );
};

export default AllPost;

