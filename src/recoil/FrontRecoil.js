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
      { label: '유저 관리', id: 'usermanagement' },
      { label: '게시판 요청', id: 'bandrequest' },
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

export const postRowState = atom({
  key: 'postRowState',
  default: [
    { label: '제목', id: 'title' },
    { label: '작성자', id: 'writer' },
    { label: '작성 날짜', id: 'createDate' },
    { label: '조회수', id: 'view' },
    { label: '좋아요', id: 'like' },
    { label: '아이디', id: 'userId' },
    { label: '닉네임', id: 'nickname' },
    { label: '가입 날짜', id: 'joinDate' },
    { label: '권한', id: 'role' },
    { label: '글번호', id: 'id' },
    { label: '내용', id: 'contents' },
    { label: '요청게시판', id: 'requestBoard' },
    { label: '요청 날짜', id: 'requestDate' },
  ]
});
