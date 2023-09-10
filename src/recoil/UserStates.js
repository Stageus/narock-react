import { atom } from "recoil";

export const idState = atom({
    key: 'idState',
    default: '',
  });
  
  export const passwordState = atom({
    key: 'passwordState',
    default: '',
  });
  
  export const passwordConfirmState = atom({
    key: 'passwordConfirmState',
    default: '',
  });
  
  export const nicknameState = atom({
    key: 'nicknameState',
    default: '',
  });
  
  export const nameState = atom({
    key: 'nameState',
    default: '',
  });
  
  export const emailState = atom({
    key: 'emailState',
    default: '',
  });
  
  export const idMsgState = atom({
    key: 'idMsgState',
    default: '',
  });
  
  export const passwordMsgState = atom({
    key: 'passwordMsgState',
    default: '',
  });
  
  export const passwordConfirmMsgState = atom({
    key: 'passwordConfirmMsgState',
    default: '',
  });
  
  export const nicknameMsgState = atom({
    key: 'nicknameMsgState',
    default: '',
  });
  
  export const nameMsgState = atom({
    key: 'nameMsgState',
    default: '',
  });
  
  export const emailMsgState = atom({
    key: 'emailMsgState',
    default: '',
  });
  
  export const isIdState = atom({
    key: 'isIdState',
    default: false,
  });
  
  export const isPasswordState = atom({
    key: 'isPasswordState',
    default: false,
  });
  
  export const isPasswordConfirmState = atom({
    key: 'isPasswordConfirmState',
    default: false,
  });
  
  export const isNicknameState = atom({
    key: 'isNicknameState',
    default: false,
  });
  
  export const isNameState = atom({
    key: 'isNameState',
    default: false,
  });
  
  export const isEmailState = atom({
    key: 'isEmailState',
    default: false,
  });
  
  export const isCertificationState = atom({
    key: 'isCertificationState',
    default: false,
  });
  
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
      password:'',
      confirmPassword:'',
      nickname:'',
      name:'',
      email:'',
      certification:'',
    }
  })