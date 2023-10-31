import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../styled/ProjectStyle";
import { useRecoilValue } from 'recoil';
import { bandnameState } from "../recoil/BackRecoil";

import Header from "../components/common/Header";
import BandName from "../components/band/BandName";
import BandRequestDialogBox from "../components/band/BandRequestDialogBox";
import axios from "axios";

const Allband = () => {
    const bandList = useRecoilValue(bandnameState);
    const [getData, setGetData] = useState([]);
    console.log(getData)
    useEffect(()=>{
        axios.get("https://www.narock.site/band/all",
        {
            withCredentials: true,
        }
        )
        .then(function (response) {
             console.log(response)
             setGetData(response.data.data[0])
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    },[])
    const [dialog,setDialog] = useState(false);

    const openDialog = () => {
        setDialog(true)
    }
    const closeDialog = () => {
        setDialog(false)
    }

    return (
        <div>
            <Header/>
            <BandName bandname={getData} bandlist={bandList}/>
            <RequestButton value="게시판 생성 요청" onClick={openDialog}/>
            {dialog &&
                <BandRequestDialogBox bandname={getData} dialog={dialog} setDialog={closeDialog}/>
            }
        </div>
    );
};
const RequestButton = styled(Button)`
    position:fixed;
    bottom:0;
    right:10px;
`

export default Allband;