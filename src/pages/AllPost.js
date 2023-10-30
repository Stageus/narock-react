import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import PostDetailBox from "../components/write/PostDetailBox";
import {useRecoilValue} from 'recoil';
import { commentState, postState } from '../recoil/BackRecoil';

import { Div } from "../styled/ProjectStyle";
import axios from "axios";
const AllPost = ( ) => {
    const [postData, setPostData] = useState({});

    useEffect(()=>{
        axios.get("https://www.narock.site/post",
        {
            withCredentials: true,
            params:{
                postIndex:1,
            }
        }
        )
        .then(function (response) {
             console.log(response.data)
             setPostData(response.data)
             console.log(postData)
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    },[])

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

