import React from "react";
import { Input, Button } from "../../styled/ProjectStyle";
import { styled } from "styled-components";
const SearchBox = () => {
    return(
        <Box>
            <select>
                <option>작성자</option>
                <option>제목+내용</option>
            </select>
            <Input height="fit-content" margin="0 10px"/>
            <Button value="검색" type="button" height="fit-content" margin="0" marginleft="0"/>
        </Box>
    )
}

const Box = styled.div`
    display:flex;
    justify-content: end;
    align-items: center;
`
export default SearchBox;