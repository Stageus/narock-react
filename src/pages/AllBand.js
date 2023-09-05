import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { bandnameState } from "../recoil/BackRecoil";
import BandName from "../components/band/BandName";
import Header from "../components/common/Header";

import { Align, Button } from "../styled/ProjectStyle";
import BandRequestDialog from "../components/band/BandRequestDialog";

const Allband = () => {
    const bandnames = useRecoilValue(bandnameState);
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
            <ListAlign>
                {Object.keys(bandnames).map((initial,index) =>{
                    return(
                        <div key={index}>
                            <BandName initial={initial} name={bandnames[initial]} />
                        </div>
                    )
                })}
            </ListAlign>
            <RequestButton value="게시판 생성 요청" onClick={openDialog}/>
            {dialog &&
                <BandRequestDialog bandnames={bandnames} dialog={dialog} setDialog={closeDialog}/>
            }
        </div>
    );
};

const ListAlign = styled(Align)`
    margin:0 160px;
    display:grid;
    grid-template-columns: repeat(10,1fr)
`

const RequestButton = styled(Button)`
    position:fixed;
    bottom:0;
    right:10px;
`

export default Allband;