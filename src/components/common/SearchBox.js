import React from "react";
import InputField from "../InputField"
import Buttons from "../Buttons"
import { styled } from "styled-components";
const SearchBox = () => {
    return(
        <Box>
            <select>
                <option>작성자</option>
                <option>제목</option>
            </select>
            <InputField height="fit-content" margin="0 10px"/>
            <Buttons value="검색" height="fit-content" margin="0"/>
        </Box>
    )
}

const Box = styled.div`
    display:flex;
    justify-content: end;
    align-items: center;
`
export default SearchBox;