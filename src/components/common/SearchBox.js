import React, { useState } from "react";
import { Input, Button } from "../../styled/ProjectStyle";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom"
const SearchBox = (props) => {
    const { searchParams } = props;
    const [searchValue, setSearchValue] = useState('');

    const [selectedOption, setSelectedOption] = useState(false);
    
    const navigate = useNavigate();

    const selectChange = (e) => {
        const option = e.target.value;
        if(option === "제목+내용"){
            setSelectedOption(true)
        }else{
            setSelectedOption(false)
        }
    }

    const SearchResult = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue)
    }


    // if()
    return(
        <Box>
            <select onChange={(e)=>{selectChange(e)}}>
                <option>작성자</option>
                <option>제목+내용</option>
            </select>
            <Input height="fit-content" margin="0 10px" onChange={(e)=>{SearchResult(e)}}/>
            <Button value="검색" type="button" height="fit-content" margin="0" marginleft="0" onClick={()=>{navigate(`/totalsearch?query=${searchValue}`)}}/>
        </Box>
    )
}

const Box = styled.div`
    display:flex;
    justify-content: end;
    align-items: center;
`
export default SearchBox;