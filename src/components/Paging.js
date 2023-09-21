import React from "react";
import Pagination from "react-js-pagination";
import { styled } from "styled-components";
const Paging= (props) => {
    const {page,setPage,itemsCountPerPage,totalItemsCount } = props;
    const handlePageChange = ( page ) => {
        setPage(page);
        console.log(page)
    };
    return(
        <PaginationStyle>
            <Pagination 
            activeClass="active"            
            activePage={page} //현재 페이지
            itemsCountPerPage={itemsCountPerPage} // 한 페이지당 보여줄 리스트 아이템의 개수
            totalItemsCount={totalItemsCount} //총 아이템의 개수
            onChange={handlePageChange}
            pageRangeDisplayed={9} // 한 페이지에 표시할 게시글의 수
            prevPageText={"◀"}
            nextPageText={"▶"}>
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