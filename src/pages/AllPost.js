import React from "react";
import Header from "../components/common/Header";
import PostDetailBox from "../components/write/PostDetailBox";

import { Div } from "../styled/ProjectStyle";
const AllPost = ( ) => {

    return (
        <div>
            <Header/>
            <Div>
                <PostDetailBox />
            </Div>
        </div>
    );
};

export default AllPost;

