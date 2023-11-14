import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { styled } from "styled-components";
const Paging= (props) => {
    const { totalItemsCount, currentPage, onPageChange } = props;
    return(
        <PaginationStyle>
            <Pagination 
            activePage={currentPage}
            itemsCountPerPage={10}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={9}
            prevPageText={"◀"}
            nextPageText={"▶"}
            onChange={onPageChange}
            >

            </Pagination>
        </PaginationStyle>
    )
}

const PaginationStyle = styled.div`
    .pagination{
        display:flex;
        justify-content:center;
    }
    ul{
        list-style: none;
    }
    li{
        margin:0 10px;
        cursor:pointer;
    }
    .active{
        font-weight:bold;
    }
    a{
        text-decoration:none;
        color: #000;

    }
`
export default Paging;