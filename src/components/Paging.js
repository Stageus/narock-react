import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { styled } from "styled-components";
const Paging= () => {
    const [page,setPage] = useState(1);
    const handlePageChange = (page) => {
        setPage(page);
      };

    return(
        <PaginationStyle>
            <Pagination 
            activeClass="active"            
            activePage={page}
            itemsCountPerPage={20}
            totalItemsCount={450}
            pageRangeDisplayed={9}
            prevPageText={"◀"}
            nextPageText={"▶"}
            onChange={handlePageChange}>
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