import React, { useCallback, useState } from "react";
import { Input, Button } from "../../styled/ProjectStyle";
import styled from "styled-components";
import { Align,Error } from "../../styled/ProjectStyle";

const MyPageInfo = ({ onDataChange , userData}) => {
    const [img, setImg] = useState('img/avatar.png');
    const [isHover,setIsHover] = useState(false);

    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [nicknameMsg,setNicknameMsg] = useState("");
    const [passwordMsg,setPasswordMsg] = useState("");
    const [passwordConfirmMsg,setPasswordConfirmMsg] = useState("");

    const [isNickname,setIsNickname] = useState(false);
    const [isPassword,setIsPassword] = useState(false);
    const [isPasswordConfirm,setIsPasswordConfirm] = useState(false);

    const HandleLoadFile = (e) => {
        if(e.target.files[0]){
            setImg(e.target.files[0])
            onDataChange("profileimg",e.target.files[0]);
        }else{
            setImg('img/avatar.png');
            onDataChange("profileimg","");
            return
        }

        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }


    const HandleDeleteFile = () => {
        setImg('img/avatar.png')
        onDataChange("profileimg","");
    }



    //닉네임 유효성 검사
    const onChangeNickname = useCallback((e)=>{
        const nickNameValue = e.target.value;
        setNickname(nickNameValue)
        // if(사용가능한닉네임){
        //     setNicknameMsg("닉네임은 16자");
        // }else if(중복닉네임){
        //     setNicknameMsg("닉네임은 16자");
        // }
        onDataChange("nickname", nickNameValue);
    },[onDataChange])

    //비밀번호 유효성 검사
    const onChangePw = useCallback((e)=>{
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
        const passwordValue = e.target.value;
        setPassword(passwordValue)
        if(!passwordRegex.test(passwordValue)){
            setPasswordMsg("영문 대소문자/숫자/특수문자 조합 8자~16자로 입력해 주세요.")
            setIsPassword(false)
        }else{
            setPasswordMsg("");
            setIsPassword(true)
        }
    },[])

    //비밀번호 확인 유효성 검사
    const onChangePwConfirm = useCallback((e)=>{
        const passwordConfirmValue = e.target.value;
        setPasswordConfirm(passwordConfirmValue)
        if(password === passwordConfirmValue){
            setPasswordConfirmMsg("")
            setIsPasswordConfirm(true)
        }else{
            setPasswordConfirmMsg("비밀번호가 일치하지 않습니다.");
            setIsPasswordConfirm(false)
        }
        onDataChange("password", passwordConfirmValue);
    },[password, onDataChange])



    const handleJoinButtonClick = () => {
        console.log("User Data:", userData);
    };

    return (
        <div>
            <MyPageBox>
                <Title>마이 페이지</Title>
                <UserInfo>

                        <div>아이디</div>
                        <Space>kjhwlgusdl</Space>

                        <div>닉네임</div>
                        <Input margin="5px 0 15px 0" placeholder="유저 닉네임" maxlength="16" onChange={onChangeNickname}/>
                        <div>
                            <RuleIcon  onMouseOver={()=>{setIsHover(true)}} onMouseOut={()=>{setIsHover(false)}}>?</RuleIcon>
                            {isHover &&
                            <Rule >16자까지, 닉네임 앞뒤로 공백 불가, 단어 사이 공백 1회 <br/>
                            허용공백 문자 & 보안상 문제되는 특수문자는 발견시 제외처리 <br/>
                            (이미 등록한 공백 문자는 다른 문자로 강제전환) <br/>
                            어법에 맞지 않는 한글(쐥,뛩.. 등등) 사용 <br/>
                            금지불량 닉네임(욕설, 불건전 닉네임)은 임의 삭제 혹은 계정 징계 조치 <br/>
                            </Rule>
                            }
                        </div>

                        <Space>프로필 사진 (jpg,jpeg,gif,png 2MB 이하)</Space>
                        <ProfileBox>
                        <Avatar src={img} alt="profile"></Avatar>
                        <FileUploadInput type="file" id="file-upload" accept="image/jpg,image/png,image/jpeg,image/gif" onChange={HandleLoadFile}/>
                        <FileUploadLabel htmlFor="file-upload">업로드</FileUploadLabel>
                        <Button
                        value="삭제" 
                        type="button" 
                        borderradius="5px" 
                        padding="5px" 
                        backgroundcolor="white" 
                        color="#3185FC" 
                        border="1px solid #3185FC"
                        onClick={HandleDeleteFile}
                        />
                        </ProfileBox>

                        <div>이메일</div>
                        <Space>kjhwlgusdl@gmail.com</Space>

                        <div>현재 비밀번호</div>
                        <Input margin="5px 0 15px 0" type="password"/>
                        <div>비밀번호 변경 (영문 대소문자/숫자/특수문자 조합, 8자~16자)</div>
                        <Align position="relative">
                            <Input onChange={onChangePw} type="password" maxlength="16" marginright="10px"/>
                            {!isPassword && password.length > 0 && <ErrorMsg right="-270px">{passwordMsg}</ErrorMsg>}
                        </Align>

                        <div>비밀번호 확인</div>
                        <Align>
                            <Input onChange={onChangePwConfirm} type="password" marginright="10px"/>
                            {passwordConfirm.length > 0 && <ErrorMsg> {passwordConfirmMsg}</ErrorMsg>}
                        </Align>
                </UserInfo>
                <ButtonBox>
                <Button value="정보 수정" type="button" borderradius="5px" padding="5px" onClick={handleJoinButtonClick}/>
                <Button value="회원 탈퇴" type="button" borderradius="5px" padding="5px"/>
            </ButtonBox>
            </MyPageBox>
        </div>
    );
};
const ErrorMsg = styled(Error)`
    position:absolute;
`
const MyPageBox = styled(Align)`
    flex-direction:column;
    margin:30px 160px;
    border:1px solid #E2E8FF;
`
const UserInfo = styled.div`
    margin:30px 0 0 0;
`
const Title = styled.div`
    background-color: #E0E6FF;
    width:100%;
    font-size:32px;
    padding:10px 0;
    color:#3185FC;
`
const Space = styled.div`
    margin-bottom:15px;
`
const ProfileBox = styled(Align)`
    margin:10px 0;
`
const Avatar = styled.img`
    border-radius: 30px;
    width:50px;
    height:50px;
    margin-right:10px;
`
const FileUploadInput = styled.input`
    position:absolute;
    width:1px;
    height:1px;
    padding:0;
    margin: -1px;
    overflow:hidden;
    clip:rect(0,0,0,0);
    border:0;
`
const FileUploadLabel = styled.label`
    display:inline-block;
    background-color:#3185FC;
    color:white;
    border:none;
    width:fit-content;
    padding:5px;
    border-radius:5px;
    cursor:pointer;
`

const RuleIcon = styled(Align)`
    border-radius:20px;
    background-color: #3185FC;
    color:#fff;
    width:14px;
    height:14px;
    justify-content:center;
    position:relative;
    top: -38px;
    left:240px;
    cursor:help;
`

const Rule = styled.div`
    width:313px;
    padding:15px 10px;
    border: 1px solid #3185FC;
    font-size:10px;
    position:absolute;
    background-color:#fff;
    top: 295px;
    right:515px;
    color:#222A68;
`

const ButtonBox = styled(Align)`
    /* margin:30px 0 50px 0; */
    justify-content:center;

`
export default MyPageInfo;