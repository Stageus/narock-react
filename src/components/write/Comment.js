import React, { useState } from "react";
import styled from "styled-components";
import { Button, Div } from "../../styled/ProjectStyle";
import { commentState } from '../../recoil/BackRecoil';
import { useRecoilValue, useRecoilState } from 'recoil';

const Comment = (props) => {
    const { bandname, postid } = props;
    const [comments, setComments] = useRecoilState(commentState);
    const [active,setActive] = useState(false);
    const [afterModifyComment,setAfterModifyComment] = useState('');
    const [isComment,setIsComment] = useState(false);
    // const comments = useRecoilValue(commentState); // postState 셀렉터로 데이터 가져옴
    const comment = comments.filter(p => p.boardName === bandname && p.postId === parseInt(postid));

    const replyEvent = () =>{
        setActive(!active);
    }

    const modifyEvent = () => {
        setIsComment(!isComment)
    }

    const commentValue = (e) => {
        const comment = e.target.value;
        setAfterModifyComment(comment)
    }

    const modifyComment = (idx,value) => { // 수정 클릭 후 바로 완료 누르면 내용 지워짐.ㅠㅠ
        const updatedComments = [...comments]; //복사
        const updatedComment = {
            ...updatedComments[idx],
            content: value,
          };

          updatedComments[idx] = updatedComment;
          setComments(updatedComments)
          setIsComment(!isComment)

    }
    return(
        <Div padding="20px" margin="0" border="1px solid #e2e8ff" display="block">
            <div>댓글</div>
                {comment.map((val,idx)=>{
                    return(
                        <Div justifycontent="space-between" borderbottom="1px solid #e2e8ff" margin="0" key={val[idx]}>
                            <Div>
                                <img src="/img/avatar.png" width="40px" alt="프로필사진"/>
                                <Div flexdirection="column" alignitems="flex-start">
                                    <div>{val.writer}</div>
                                    {isComment ?
                                        <MainComment onChange={(e)=>{commentValue(e)}} defaultValue={val.content}/>
                                        :<div>{val.content}</div>
                                    }
                                    <Date>{val.date}</Date>
                                </Div>
                            </Div>
                                {
                                    isComment ?
                                    <Div>
                                        <Button value="취소" backgroundcolor="transparent" color="mainColor" onClick={()=>{setIsComment(!isComment)}}/>
                                        <Button value="완료" backgroundcolor="transparent" color="mainColor" onClick={()=>{modifyComment(idx,afterModifyComment)}}/>
                                    </Div>
                                        :
                                    <Div>
                                        <Button value="답글" backgroundcolor="transparent" color="mainColor" onClick={replyEvent}/>
                                        <Button value="수정" backgroundcolor="transparent" color="mainColor" onClick={modifyEvent}/>
                                        <Button value="삭제" backgroundcolor="transparent" color="mainColor"/>
                                    </Div>
                                }

                                {
                                    active[idx] === idx &&
                                    <Div>
                                        <SubComment/>
                                        <SubmitButton value="등록"/>
                                    </Div>
                                }
                        </Div>
                    )
                })}

                <Div>
                    <MainComment />
                    <SubmitButton value="등록"/>
                </Div>
        </Div>
    )
}

const Date = styled.div`
    color:#838383;
    font-size:11px;
`
const SubComment = styled.textarea`
    width:95%;
    margin-left:7%;
    height:80px;
    resize:none;
    border: 1px solid #ADBDFF;
    padding:5px;
`
const MainComment = styled(SubComment)`
    width:100%;
    margin:0;
`
const SubmitButton = styled(Button)`
    position:absolute;
    right:0;
    bottom:0;

`

export default Comment;