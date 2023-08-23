import React, { useCallback, useState } from "react";
import Header from "../components/common/Header";
import MyPageInfo from "../components/auth/MyPageInfo"

const MyPage = () => {
    const [userData, setUserData] = useState({
        nickname: "",
        profileimg:"",
        password:"",
    });

    const handleUserDataChange = useCallback((field, value) => {
        setUserData((prevData) => ({
            ...prevData,
            [field]: value
        }));

        // if(setUserData[field])
    },[]);

    return (
        <div>
            <Header/>
            <MyPageInfo onDataChange={handleUserDataChange} userData={userData}/>

        </div>
    );
};




export default MyPage;