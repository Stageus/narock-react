import React from "react";
import Posts from "../components/main/Posts";
const AllPost = ( props ) => {
    const {sortedPost} = props;
    return (
        <div>
            {sortedPost.map((v,i)=>(
                <Posts 
                // bandname={bandname}
                key={i}
                postId={v.postId}
                postTitle={v.postTitle} 
                writer={v.writer}
                like={v.like}
                view={v.view}
                date={v.date}
                /> 
            ))}   
        </div>
    );
};

export default AllPost;