import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Align } from "../styled/ProjectStyle";
import Header from "../components/common/Header";
import MainPostList from "../components/main/MainPostList"
import axios from "axios";

const Main = () => {
  const category = ["인기 게시글", "공지 사항", "새소식"];
  const [postData, setPostData] = useState([]);
  useEffect(()=>{
    axios.get("https://www.narock.site/post/main",
    {
        withCredentials: true,
    }
    )
    .then(function (response) {
         console.log(response)
        setPostData(response.data)
    }).catch(function (error) {
        // 오류발생시 실행
    })

},[])

    return (
      <React.Fragment>
        <Header/>
        <Div>
          <MainPostList category={category[0]} post={postData.popularPost}/>
          <div>
            <MainPostList category={category[1]} post={postData.notice}/>
            <MainPostList category={category[2]} post={postData.news}/>
          </div>
        </Div>
      </React.Fragment>
      )
}

const Div = styled(Align)`
  justify-content:space-evenly;
  margin-top:150px;
  font-size:16px;
`
export default Main;