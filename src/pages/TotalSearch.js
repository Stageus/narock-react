import React from "react";
import Header from "../components/common/Header";
import { useSearchParams } from 'react-router-dom'
const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <Header/>
            <p>검색어:{searchParams.get('query')}</p>
        </div>
    );
};

export default Search;