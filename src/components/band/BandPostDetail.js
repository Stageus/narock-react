import React from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const BandPostDetail = () => {
    const { bandname } = useParams();
    return (
        <div>
            <Box>
                
            </Box>
        </div>
    );
};

const Box = styled.div`
display:flex;
margin-top:30px;
`
export default BandPostDetail;