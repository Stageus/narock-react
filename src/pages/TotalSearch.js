import React from "react";
import Header from "../components/common/Header";
import styled from "styled-components";
import { useSearchParams } from 'react-router-dom'

import SearchResult from "../components/common/SearchResult";
import { Div } from "../styled/ProjectStyle";
import axios from "axios";
const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <Header/>
            <Div display="block" margin="30px 80px">
                {/* <Title>공지사항</Title> */}
                <SearchResult searchParams={searchParams}/>
            </Div>
        </div>
    );
};

const Title = styled.div`
    background-color: #E0E6FF;
    /* width:100%; */
    font-size:32px;
    padding:10px 0;
    color:#3185FC;
`

export default Search;