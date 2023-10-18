import React from "react";
import Header from "../components/common/Header";
import WriteBox from "../components/write/WriteBox";
import { Navigate } from "react-router-dom"
import { useRecoilValue } from 'recoil';
import { loginState } from "../recoil/UserStates";

const Write = ( ) => {
    const auth = useRecoilValue(loginState);

    if(auth){
        return (
            <div>
                <React.Fragment>
                    <Header/>
                    <WriteBox/>         
                </React.Fragment>
            </div>
                );
            }
            else{
                alert('로그인이 필요합니다.')
                return <Navigate to="/login"/>
            }
};

export default Write;