import React from "react";
import styled from "styled-components";
import { Align } from "../styled/ProjectStyle";
import Header from "../components/common/Header";
import PopularList from "../components/main/PopularList"
import RecentList from "../components/main/RecentList";

const Main = () => {
    return (
      <React.Fragment>
        <Header/>
        <Div>
          <PopularList/>
          <div>
            <RecentList/>
            <RecentList/>
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