import React from "react";
import Header from "../components/common/Header";
import InputField from "../components/InputField";
import Buttons from "../components/Buttons";

const MyPage = () => {
    return (
        <div>
            <Header/>
            <div>
                <div>
                    <div>아이디</div>
                    <div>아이디</div>
                </div>
                <div>
                    <div>닉네임</div>
                    <InputField/>
                </div>
                <div>
                    <div>프로필 사진 (jpg,jpeg,gif,png 2MB 이하)</div>
                    <div>사진 출력 공간</div>
                    <Buttons value="업로드" type="file"/>
                    <Buttons value="삭제"/>
                </div>
                <div>
                    <div>이메일</div>
                    <div>이메일주소</div>
                </div>
                <div>
                    <div>현재 비밀번호</div>
                    <InputField/>
                </div>
                <div>
                    <div>비밀번호 변경 (영문 대소문자/숫자/특수문자 조합, 8자~16자)</div>
                    <InputField/>
                </div>
                <div>
                    <div>비밀번호 확인</div>
                    <InputField/>
                </div>
                <div>
                    <Buttons value="정보 수정"/>
                    <Buttons value="회원 탈퇴"/>
                </div>
            </div>
        </div>
    );
};

export default MyPage;