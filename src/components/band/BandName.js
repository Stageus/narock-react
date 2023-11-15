import React from "react";
import styled from "styled-components";
import { Align } from "../../styled/ProjectStyle";
import { useNavigate } from "react-router-dom";

const BandName = (props) => {
  const { bandname, bandlist } = props;
  // console.log(bandname)
  const navigate = useNavigate();

  //밴드이름 정렬
  const sortedBandname = [...bandname].sort((a, b) => a.bandname.localeCompare(b.bandname));
  const sortedList = {};
  // const hangeul = /^[가-힣0-9]+$/;


  const choseong = (str) => {
    let cho = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
    let result = "";
    for(let i=0;i<str.length;i++) {
      const code = str.charCodeAt(i)-44032;
      if(code>-1 && code<11172) result += cho[Math.floor(code/588)];
    }
    return result;
  }


  sortedBandname.forEach((band) => {
    const initial = band.bandname[0].toUpperCase();
    const hangeul = choseong(band.bandname[0]);
    const number = /^[0-9]+$/;
    // Determine category
    let category;
    if (number.test(initial)) {
      category = '기타';
    } else {
      category = initial;
    }
    if (!sortedList[category]) {
      sortedList[category] = [];
    }
    sortedList[category].push(band);

    if (!sortedList[hangeul]) {
      sortedList[hangeul] = [];
    }
    sortedList[hangeul].push(band);

  });
  
  return (
    <ListAlign>
      {Object.keys(bandlist).map((initial) => (
        <List key={initial}>
          <NameTag>{initial}</NameTag>
          {sortedList[initial] &&
            sortedList[initial].map((band, index) => (
              <div key={index}>
                <Band
                  onClick={() => navigate(`/allband/${band.bandname}/notice`)}
                >
                  {band.bandname.toUpperCase()}
                </Band>
              </div>
            ))}
        </List>
      ))}
    </ListAlign>
  );
};

const ListAlign = styled(Align)`
    margin:0 160px;
    display:grid;
    grid-template-columns: repeat(10,1fr);
`

const List = styled.div`
    max-width:157px;
    min-height:411px;
    max-height:fit-content;
    border: 1px solid #E2E8FF;
    text-align:center;
`

const Band = styled.div`
    display:block;
    color:#222A68;
    margin:5px 8px;
    cursor:pointer;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    &:hover{
        font-weight:bold
    }
`

const NameTag = styled.div`
    height:36px;
    background-color: #E0E6FF;
    color:#3185fc;
    font-size:20px;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:center;
`

export default BandName;