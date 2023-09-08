import React, { useState } from "react";
import styled from "styled-components";
import {Align, Input} from "../../styled/ProjectStyle";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();

    const pageNavigate = (page) => {
        navigate(page)
    }

    const [inputVisible, setInputVisible] = useState(false);

    const searchInputEvent = () => {
        setInputVisible(!inputVisible)
    }

    const [keyword,setKeyword] = useState('');


    const searchEnterEvent = (event) => {
        if(event.key === "Enter"){
            navigate(`/totalsearch?query=${keyword}`)
        }
    }
    return ( 
        <nav>
            <Div>
                <Link to="/"><H1><Img src={`${process.env.PUBLIC_URL}/img/Header_logo.png`} alt="logo"></Img>락·밴·드·커·뮤·니·티</H1></Link>
                <FirstNav>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/img/search_icon.png`} alt="검색"></img>
                        <NavButton onClick={searchInputEvent}>통합 검색</NavButton>
                        {inputVisible && <ClickInput type="text" placeholder="검색" onChange={(e)=>{setKeyword(e.target.value)}} onKeyDown={searchEnterEvent}></ClickInput>}
                    </div>
                    <NavButton>마이페이지</NavButton>
                    <NavButton onClick={()=>{pageNavigate('/login')}}>로그인</NavButton>
                    <NavButton onClick={()=>{pageNavigate('/admin/usermanagement')}}>관리자 페이지</NavButton>
                    
                </FirstNav>
            </Div>
            <SecondNav>
                <Link to="/allband"><NavButton2>밴드 검색</NavButton2></Link>
                <Link to="/notice"><NavButton2>공지사항</NavButton2></Link>
                <Link to="/news"><NavButton2>새소식</NavButton2></Link>
                <Link to="/community"><NavButton2>커뮤니티</NavButton2></Link>
            </SecondNav>
        </nav>
     );
}


const ClickInput = styled(Input)`
    height:17px;
    margin:0
`

const H1 = styled.h1`
    font-size: 12px;
    display:flex;
    align-items:center;
    color:#3185FC;
    cursor:pointer;
`
const Img = styled.img`
    width:111px;
    margin-right:10px;
`
const NavButton = styled.button`
    border: none;
    background-color: transparent;
    cursor:pointer;
    color:#3185FC;
    transition:0.1s;
    &:hover{
        color:blue;
    }
`

const NavButton2 = styled(NavButton)`
    color:white;
    font-weight:bold;
    font-size:20px;
`
const FirstNav = styled.div`
    display:flex;
    align-items:center;
`
const Div = styled(Align)`
    justify-content:space-between;
    margin:0 160px;
`

const SecondNav = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    background-color: #3185FC;
    height:39px;
`
export default Header;
