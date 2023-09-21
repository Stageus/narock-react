import React from "react";
import Posts from "../components/main/Posts";
import { useParams } from 'react-router-dom';
const AllPost = ( props ) => {
    const {sortedPost, domain} = props;
    const { postid } = useParams();
    console.log(postid)
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
                domain={domain}
                /> 
            ))}   
        </div>
    );
};

export default AllPost;

