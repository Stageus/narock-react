import React from "react";
import {  Div } from "../../styled/ProjectStyle";
import styled from 'styled-components';
import { useRecoilState } from "recoil";
import { bannerImgState } from "../../recoil/BackRecoil";
import axios from "axios";

const BandHeader = (props) => {
    const { bandname } = props;
    const [bannerImg,setBannerImg] = useRecoilState(bannerImgState);
    const HandleLoadFile = (e) => {
        const formdata = new FormData();
        formdata.append('imageFile', bannerImg);
        if(e.target.files[0]){
            if(window.confirm("이 이미지로 설정하시겠습니까?") === true){
                setBannerImg(e.target.files[0])
                axios.post("https://www.narock.site/post/banner", {

                },
                )
                .then(function (response) {
                    if (response.data.success) {
                        console.log(response)
                    }else{
                        console.log(response)
                    }      
                })
            }else{
                return;
            }
            // handleUserDataChange("profileimg",e.target.files[0]);
        }else{
            setBannerImg(bandname);
            // handleUserDataChange("profileimg","");
            return
        }

        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setBannerImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);


    }


    // const HandleDeleteFile = () => {
    //     setImg('img/avatar.png')
    //     handleUserDataChange("profileimg","");
    // }

    return(
        <React.Fragment>
            <Div margin="0" position="relative" display="block">
                {BannerImg ? 
                (<BannerImg src={bannerImg} alt={`${bandname} 게시판`}/>)
                : (<div>{bandname} 게시판</div>)}
                
                
                <Label htmlFor="file-upload">
                    배너 수정
                    <BannerButton position="absolute" type="file" id="file-upload" accept="image/jpg,image/png,image/jpeg,image/gif" onChange={HandleLoadFile}/>
                </Label>
            </Div>
        </React.Fragment>
    )
}


const Label = styled.label`
    position:absolute;
    bottom:0;
    right:0;
    margin:10px;
    cursor: pointer;
    background-color:#3185FC;
    color:white;
    padding:5px;
    border-radius:5px;
`
const BannerButton = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`

const BannerImg = styled.img`
    width:100%;
    object-fit: cover;
    display:flex;
    justify-content:center;
    align-items:center;
    height:191px;
    font-size:60px;

`
export default BandHeader;