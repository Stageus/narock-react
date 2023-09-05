import { atom } from "recoil";

export const menuState = atom([
    ['밴드 공지사항','notice'], 
    ['공연 정보','concertinfo' ],
    ['갤러리','gallery'], 
    ['자유 게시판','community']
])


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
        bandExist: '',
    }
})