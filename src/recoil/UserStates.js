import { atom } from "recoil";

export const isHoverState = atom({
  key: 'isHoverState',
  default: false,
});

export const registState = atom({
  key: 'registState',
  default: {
    id:'',
    password:'',
    confirmPassword:'',
    nickname:'',
    name:'',
    email:'',
    certification:'',
  }
})

export const errorState = atom({
  key:'errorState',
  default:{      
    id:'',
    isId:false,
    password:'',
    isPassword:false,
    confirmPassword:'',
    isConfirmPassword:false,
    nickname:'',
    isNickname:false,
    name:'',
    isName:false,
    email:'',
    isEmail:false,
    certification:'',
    isCertification:false,
  }
})

export const loginState = atom({
  key: 'loginState',
  default: false,
});