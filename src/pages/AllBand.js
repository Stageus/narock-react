import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../styled/ProjectStyle";
import { useRecoilValue, useRecoilState } from 'recoil';
import { bandnameState,bandDataState } from "../recoil/BackRecoil";

import Header from "../components/common/Header";
import BandName from "../components/band/BandName";
import BandRequestDialogBox from "../components/band/BandRequestDialogBox";
import axios from "axios";

const Allband = () => {
    const bandList = useRecoilValue(bandnameState);
    const [bandData, setBandData] = useRecoilState(bandDataState)
    console.log(bandData)
    useEffect(()=>{
        axios.get("https://www.narock.site/band/all",
        {
            withCredentials: true,
        }
        )
        .then(function (response) {
            //  console.log(response)
            setBandData(response.data.data[0])
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
            <BandName bandname={bandData} bandlist={bandList}/>
            <RequestButton value="게시판 생성 요청" onClick={openDialog}/>
            {dialog &&
                <BandRequestDialogBox bandname={bandData} dialog={dialog} setDialog={closeDialog}/>
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