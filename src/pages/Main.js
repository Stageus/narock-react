import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Align } from "../styled/ProjectStyle";
import Header from "../components/common/Header";
import PopularList from "../components/main/PopularList"
import RecentList from "../components/main/RecentList";
import axios from "axios";

const Main = () => {
  const category = ["인기 게시글", "공지 사항", "새소식"];
  const [postData, setPostData] = useState([]);
  useEffect(()=>{
    axios.get("https://www.narock.site/post/all",
    {
        withCredentials: true,
        params:{
            postCategory:4,
            pages:1
        }
    }
    )
    .then(function (response) {
         console.log(response)
         setPostData(response.data)
         console.log(postData)
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
},[])
    return (
      <React.Fragment>
        <Header/>
        <Div>
          {/* <PopularList category={category[0]}/> */}
          <RecentList category={category[0]}/>
          <div>
            <RecentList category={category[1]}/>
            <RecentList category={category[2]}/>
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