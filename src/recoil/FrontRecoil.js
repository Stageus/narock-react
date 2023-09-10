import { atom } from "recoil";

export const bandmenuState = atom({
    key: 'bandmenuState',
    default: [
      { label: '밴드 공지사항', id: 'notice' },
      { label: '공연 정보', id: 'concertinfo' },
      { label: '갤러리', id: 'gallery' },
      { label: '자유 게시판', id: 'community' }
    ]
  });

export const adminmenuState = atom({
    key: 'adminmenuState',
    default: [
      { label: '유저 관리', id: 'userManagement' },
      { label: '게시판 요청', id: 'BandRequest' },
    ]
  });

export const inputValueState = atom({
    key: 'inputValueState',
    default: '',
})

export const requestValueState = atom({
    key: 'requestValueState',
    default:'',
})

export const bandExistState = atom({
    key: 'bandExistState',
    default:false,
})

export const userDataState = atom({
    key:'userDataState',
    default:{
        boardName:'',
        boardRequest:'',
    }
})

export const likedState = atom({
    key: 'likedState',
    default:0,
})

export const isLikedState = atom({
    key: 'isLikedState',
    default:false,
})


