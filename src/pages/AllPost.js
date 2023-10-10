import React from "react";
import Header from "../components/common/Header";
import PostDetailBox from "../components/write/PostDetailBox";
import {useRecoilValue} from 'recoil';
import { commentState, postState } from '../recoil/BackRecoil';

import { Div } from "../styled/ProjectStyle";
const AllPost = ( ) => {

    const post = useRecoilValue(postState);
    const comment = useRecoilValue(commentState);

    return (
        <div>
            <Header/>
            <Div>
                <PostDetailBox 
                post={post}
                Allcomment={comment}/>
            </Div>
        </div>
    );
};

export default AllPost;

