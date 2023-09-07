import React from "react"
import styled from "styled-components"
import { Button, Error, Input, Success } from "../../styled/ProjectStyle";
const BandRequestDialog = (props) => {
    const {inputValue, bandExist, NameOnChangeEvent, RequestOnChangeEvent, sendRequest, setDialog} = props;

    return(
        <Dialog>
            <Title>게시판 생성 요청</Title>
            <div>
                <div>
                    게시판 이름
                    <div>
                    <Input onChange={(e)=>{NameOnChangeEvent(e)}} maxLength="40"/>
                        {
                            inputValue.length === 0 ? null : bandExist 
                            ?(<Error>이미 존재하는 게시판입니다.</Error>)
                            :(<Success>사용 가능한 게시판입니다.</Success>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <div>
                    게시판 설명
                    <div>
                        <TextArea maxLength="200" onChange={(e)=>{RequestOnChangeEvent(e)}}/>
                    </div>
                </div>
            </div>
            <Rule>
            ※ 밴드 생성 요청이 수락 될 경우, 신청한 유저가 해당 게시판의 관리자가 됩니다.
            </Rule>
            <Rule>
            ※ 신청한 이름이 곧 게시판의 이름이 되므로 신중히 작성 부탁 드립니다.
            </Rule>
            <Button value="요청" onClick={sendRequest}/>
            <Button value="닫기" onClick={setDialog}/>
        </Dialog>


    )
}


const Dialog = styled.div`
    position:absolute;
    top:15%; 
    background-color: #fff;
    padding:50px;
`

const Title = styled.div`
    text-align:center;
    font-size:20px;
    color:#3185FC
`
const TextArea = styled.textarea`
    min-width:100%;
    border: 1px solid #3185fc;
    border-radius:5px;
    height:80px;
    resize:none;
`

const Rule = styled.div`
    color:#FC3131
`

export default BandRequestDialog