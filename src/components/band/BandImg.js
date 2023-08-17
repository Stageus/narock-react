import styled from "styled-components";

const BandImg = (props) => {
    const { bandname } = props;
    return ( 
        <div>
            <BandHeader>{bandname} 게시판</BandHeader>
        </div>
    );
}
 

const BandHeader = styled.div`
    font-size:60px;
    text-align:center;
    border: 1px solid #000;
    height:191px;

`
export default BandImg;