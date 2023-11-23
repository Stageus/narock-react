import React, { useCallback, useState, useEffect } from "react";
import axios from 'axios';
import { Input, Button } from "../../styled/ProjectStyle";
import styled from "styled-components";
import { Align,Error,Div } from "../../styled/ProjectStyle";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userDataState } from "../../recoil/BackRecoil";

const MyPageInfo = () => {

    const [isHover,setIsHover] = useState(false);
    const navigate = useNavigate();

    const [nicknameMsg,setNicknameMsg] = useState("");
    const [passwordMsg,setPasswordMsg] = useState("");
    const [passwordConfirmMsg,setPasswordConfirmMsg] = useState("");

    const [userData, setUserData] = useRecoilState(userDataState)
    const [userInfo,setUserInfo] = useState([]); //api 데이터

    const [profileImg, setProfileImg] = useState('img/avatar.png');
    
    //유저 데이터 불러오기
    useEffect(()=>{
        axios.get("https://www.narock.site/account",
        {withCredentials: true}
        )
        .then(function (response) {
             console.log(response)
             setUserInfo(response.data.data);
             setProfileImg(response.data.data.userProfileImg)
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    },[])
    

    console.log(userData)

    // 유저 데이터 변경 State
    const handleUserDataChange = useCallback((field, value) => {
        setUserData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    },[]);
    


    const HandleProfileLoadFile = async (e) => {
        const imageFile = e.target.files[0];
        const imgUrl = URL.createObjectURL(imageFile)
        console.log(imgUrl)
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    handleUserDataChange("profileimg", imageFile)
                    setProfileImg(imgUrl);
                }
            };
            reader.readAsDataURL(imageFile);
        } 
    }


    const HandleDeleteFile = () => {
        handleUserDataChange("profileimg","img/avatar.png");
        setProfileImg('img/avatar.png')
    }


    //닉네임 유효성 검사
    const onChangeNickname = useCallback((e)=>{
        const nickNameValue = e.target.value;
        handleUserDataChange("nickname", nickNameValue);
    },[handleUserDataChange])


        //비밀번호 유효성 검사
        const onChangePw = useCallback((e)=>{
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
            const passwordValue = e.target.value;
            // setPassword(passwordValue)
            handleUserDataChange("password", passwordValue)
            if(!passwordRegex.test(passwordValue)){
                setPasswordMsg("영문 대소문자/숫자/특수문자 조합 8자~16자로 입력해 주세요.")
            }else{
                setPasswordMsg("");
            }
        },[handleUserDataChange])

    //새로운 비밀번호 유효성 검사
    const onChangeNewPw = useCallback((e)=>{
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
        const newPasswordValue = e.target.value;
        // setPassword(passwordValue)
        handleUserDataChange("newPassword",newPasswordValue)
        if(!passwordRegex.test(newPasswordValue)){
            setPasswordMsg("영문 대소문자/숫자/특수문자 조합 8자~16자로 입력해 주세요.")
        }else{
            setPasswordMsg("");
        }
    },[handleUserDataChange])

    //비밀번호 확인 유효성 검사
    const onChangePwConfirm = useCallback((e)=>{
        const passwordConfirmValue = e.target.value;
        // setPasswordConfirm(passwordConfirmValue)
        handleUserDataChange("passwordConfirm", passwordConfirmValue)
        if(userData.password === passwordConfirmValue){
            setPasswordConfirmMsg("")
        }else{
            setPasswordConfirmMsg("비밀번호가 일치하지 않습니다.");
        }
        handleUserDataChange("password", passwordConfirmValue);
    },[userData.password, handleUserDataChange])



    const userInfoModifyEvent = async () => {
        const formdata = new FormData();
        formdata.append('imageFile', userData.profileimg);
        formdata.append('newNicknameValue', userData.nickname);
        formdata.append('userPasswordValue', userData.password);
        formdata.append('newPasswordValue', userData.newPassword);
        formdata.append('newPasswordCheck', userData.passwordConfirm);
      
        console.log("User Data:", userData);
        console.log(...formdata);
      
        await axios.put("https://www.narock.site/account", formdata, {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
        })
        .then(function (response) {
            console.log(response)
          if (userData.password === null) {
            alert("현재 비밀번호를 입력해 주세요.");
            return false;
          }
          if (response.data.success === true) {
            alert('정보가 변경 되었습니다.');
          } if(response.data.message === "비밀번호가 일치하지 않습니다.") {
            setPasswordMsg("비밀번호가 일치하지 않습니다.")
          } if(response.data.message === "이미 존재하는 닉네임입니다."){
            setNicknameMsg("이미 사용중인 닉네임입니다.")
          } if(response.data.message === "새로 입력한 비밀번호가 서로 일치하지 않습니다."){
            setPasswordConfirmMsg("비밀번호가 일치하지 않습니다.")
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      };
      
    const userDeleteEvent = () => {
            if (window.confirm("계정을 삭제하시겠습니까?")) {
                axios
                    .delete('/account')
                    .then(function (response) {
                        alert("계정이 삭제 되었습니다.");
                        navigate('/');
                        console.log(response)
                    
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                alert("계정 삭제가 취소되었습니다.");
            }
    }
    return (
        <div>
            <UserInfo>
                <div>아이디</div>
                <Space>{userInfo.userId}</Space>
                {/* <Space>아이디 출력부분</Space> */}
                <div>닉네임</div>
                <Div flexdirection="column">
                    <Input margin="5px 0 15px 0" placeholder={userInfo.userNickname} maxLength="16" onChange={onChangeNickname}/>
                    <Error>{nicknameMsg}</Error>
                </Div>
                <Div margin="10px 0">
                    <RuleIcon  onMouseOver={()=>{setIsHover(true)}} onMouseOut={()=>{setIsHover(false)}}>?</RuleIcon>
                    {isHover &&
                    <Rule >16자까지, 닉네임 앞뒤로 공백 불가, 단어 사이 공백 1회 <br/>
                    허용공백 문자 & 보안상 문제되는 특수문자는 발견시 제외처리 <br/>
                    (이미 등록한 공백 문자는 다른 문자로 강제전환) <br/>
                    어법에 맞지 않는 한글(쐥,뛩.. 등등) 사용 <br/>
                    금지불량 닉네임(욕설, 불건전 닉네임)은 임의 삭제 혹은 계정 징계 조치 <br/>
                    </Rule>
                    }
                </Div>

                <Space>프로필 사진 (jpg,jpeg,gif,png 2MB 이하)</Space>
                <ProfileBox>
                    <Avatar src={profileImg} alt="profile"></Avatar>
                    {/* <Avatar src={userInfo.profileImg} alt="profile"></Avatar> */}
                    <Div>
                        <FileUploadInput type="file" id="file-upload" accept="image/jpg,image/png,image/jpeg,image/gif" onChange={HandleProfileLoadFile}/>
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
                </Div>
                </ProfileBox>

                <div>이메일</div>
                <Space>{userInfo.userEmail}</Space>

                <div>현재 비밀번호 (정보 변경 시 현재 비밀번호 필수 입력)</div>
                <Div>
                    <Input margin="5px 0 15px 0" type="password" onChange={onChangePw}/>
                </Div>
                <div>비밀번호 변경 (영문 대소문자/숫자/특수문자 조합, 8자~16자)</div>
                <Align>
                    <Div flexdirection="column">
                        <Input onChange={onChangeNewPw} type="password" maxLength="16" marginright="10px"/>
                        {userData.newPassword.length > 0 && <Error>{passwordMsg}</Error>}
                        
                    </Div>
                </Align>

                <div>비밀번호 확인</div>
                <Align>
                    <Div flexdirection="column">
                    <Input onChange={onChangePwConfirm} type="password" marginright="10px"/>
                    {/* {userData.passwordConfirm.length > 0 && <Error> {passwordConfirmMsg}</Error>} */}
                    {userData.newPassword !== userData.passwordConfirm && <Error> {passwordConfirmMsg}</Error>}
                    </Div>
                </Align>
            </UserInfo>
            
            <ButtonBox>
                <Button value="정보 수정" type="button" borderradius="5px" padding="5px" onClick={userInfoModifyEvent}/>
                <Button value="회원 탈퇴" type="button" borderradius="5px" padding="5px" onClick={userDeleteEvent}/>
            </ButtonBox>
        </div>
    );
};

const UserInfo = styled.div`
    /* margin:30px 0 0 0; */
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Space = styled.div`
    margin-bottom:15px;
`
const ProfileBox = styled.div`
    display:flex;
    margin:10px 0;
    align-items:center;
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

const RuleIcon = styled.div`
    display:flex;
    position:absolute;
    border-radius:20px;
    background-color: #3185FC;
    color:#fff;
    width:14px;
    height:14px;
    justify-content:center;
    align-items:center;
    top: -58px;
    left:110px;
    cursor:help;
`

const Rule = styled.div`
    position:absolute;
    width:313px;
    padding:15px 10px;
    border: 1px solid #3185FC;
    font-size:10px;
    background-color:#fff;
    top: -57px;
    color:#222A68;
    z-index:10;
    left:140px;

`

const ButtonBox = styled(Align)`
    /* margin:30px 0 50px 0; */
    justify-content:center;

`
export default MyPageInfo;