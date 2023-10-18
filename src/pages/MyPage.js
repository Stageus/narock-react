import React from "react";
import Header from "../components/common/Header";
import MyPageInfo from "../components/auth/MyPageInfo"
import { MyPageBox, Title } from "../styled/ProjectStyle";
import { Navigate } from "react-router-dom"
import { useRecoilValue } from 'recoil';
import { loginState } from "../recoil/UserStates";
const MyPage = ( ) => {
    const auth = useRecoilValue(loginState);
    if(auth){
        return (
            <div>
                <React.Fragment>
                    <Header/>
                    <MyPageBox>
                        <Title>마이 페이지</Title>
                        <MyPageInfo/>
                    </MyPageBox>
                </React.Fragment>
            </div>
        );
    }else{
        alert("로그인이 필요합니다.")
        return <Navigate to="/login"/>
    }
};



export default MyPage;