import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styled/ProjectStyle";
import { useRecoilValue } from 'recoil';
import { bandnameState } from "../recoil/BackRecoil";

import Header from "../components/common/Header";
import BandName from "../components/band/BandName";
import BandRequestDialogBox from "../components/band/BandRequestDialogBox";

const Allband = () => {
    const bandname = useRecoilValue(bandnameState);
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
            <BandName bandname={bandname}/>
            <RequestButton value="게시판 생성 요청" onClick={openDialog}/>
            {dialog &&
                <BandRequestDialogBox bandname={bandname} dialog={dialog} setDialog={closeDialog}/>
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