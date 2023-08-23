import styled from "styled-components";
import { Align } from "../../styled/ProjectStyle";

const BandImg = (props) => {
    const { bandname } = props;
    return ( 
        <div>
            <BandHeader>{bandname} 게시판</BandHeader>
        </div>
    );
}
 

const BandHeader = styled(Align)`
    justify-content:center;
    font-size:60px;
    border: 1px solid #000;
    height:191px;

`
export default BandImg;