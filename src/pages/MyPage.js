import React from "react";
import Header from "../components/common/Header";
import MyPageInfo from "../components/auth/MyPageInfo"
import { MyPageBox, Title } from "../styled/ProjectStyle";

const MyPage = () => {
    return (
        <div>
            <Header/>
            <MyPageBox>
                <Title>마이 페이지</Title>
                <MyPageInfo/>
            </MyPageBox>

        </div>
    );
};



export default MyPage;