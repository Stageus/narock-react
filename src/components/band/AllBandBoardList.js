import React from 'react';
import styled from 'styled-components';
import AllBandMenu from "./AllBandMenu"


const AllBandBoardList = (props) => {
    const { bandname } = props;

    const menu = [
        ['밴드 공지사항','notice'], 
        ['공연 정보','concertinfo' ],
        ['갤러리','gallery'], 
        ['자유 게시판','community']
    ]
    return ( 
        <MenuBox>
            {menu.map(v=>(
                <AllBandMenu menu={v[0]} domain={v[1]} bandname={bandname}/>
            ))}
        </MenuBox>
     );
}

const MenuBox = styled.div`
    border-top: 3px solid #3185FC;
    border-bottom: 3px solid #3185FC;
    width:160px;
    font-size: 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export default AllBandBoardList;