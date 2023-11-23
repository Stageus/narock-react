import axios from "axios";
import { atom, selector } from "recoil";

export const bandnameState = atom({
    "key": "bandname",
    "default": {
        기타: [
        ],
        A: [

        ],
        B: [

        ],
        C: [

        ],
        D: [

        ],
        E: [

        ],
        F: [

        ],
        G: [

        ],
        H: [

        ],
        K: [

        ],
        L: [

        ],
        M: [

        ],
        N: [

        ],
        O: [

        ],
        P: [

        ],
        Q: [

        ],
        R: [

        ],
        S: [

        ],
        T: [

        ],
        W: [

        ],
        X: [

        ],
        Y: [

        ],
        ㄱ: [

        ],
        ㄴ: [

        ],
        ㄷ: [

        ],
        ㄹ: [

        ],
        ㅁ: [

        ],
        ㅂ: [

        ],
        ㅅ: [

        ],
        ㅇ: [

        ],
        ㅈ: [

        ],
        ㅊ: [

        ],
        ㅋ: [

        ],
        ㅌ: [

        ],
        ㅍ: [

        ],
        ㅎ: [

        ],
        // 기타: [
        //     "9001",
        //     "92914",
        //     '250',
        //     '10CM',
        // ],
        // A: [
        //     "AC/DC"
        // ],
        // B: [
        //     "BLUR",
        // ],
        // C: [
        //     "CNBLUE",
        //     "CHERRY FILTER",
        //     "COLDPLAY",
        // ],
        // D: [
        //     "DAY6",
        // ],
        // E: [
        //     ""
        // ],
        // F: [
        //     "FALL OUT BOY",
        // ],
        // G: [
        //     "GINGER ROOT",
        //     "GUNS N ROSES",
        //     "GREEN DAY",
        // ],
        // H: [
        //     "HITSUJI BUNGAKU",
        //     "HONNE",
        // ],
        // K: [
        //     "KARDI",
        //     "KIRINJI",
        // ],
        // L: [
        //     "LIAM GALLAGHER",
        //     "LANY",
        //     "LED ZEPPELIN",
        // ],
        // M: [
        //     "METALLICA",
        //     "MUSE",
        // ],
        // N: [
        //     "N.EX.T",
        //     "NELL",
        //     "NUMCHA",
        //     "NIRVANA",
        // ],
        // O: [
        //     "OTOBOKE BEAVER",
        //     "OASIS",
        // ],
        // P: [
        //     "PETROLZ",
        //     "PINK FLOYD",
        // ],
        // Q: [
        //     "QUEEN"
        // ],
        // R: [
        //     "RIDE",
        //     "RADIO HEAD",
        // ],
        // S: [
        //     "SNAKE CHICKEN SOUP",
        //     "SNOW PATROL",
        // ],
        // T: [
        //     "THE POLES",
        //     "THE VOLUNTEERS",
        //     "THE STROKES",
        //     "THE SOUND",
        //     "TWO DOOR CINEMA CLUB",
        //     "THE BEATLES",
        //     "THE ROLLING STONES",
        //     "THE BEACH BOYS",
        //     "THE CALLING",
        //     "THE 1975",
        // ],
        // W: [
        //     "WAVE TO EARTH",
        //     "WENDY WANDER",
        // ],
        // X: [
        //     "Xdinary Heroes"
        // ],
        // Y: [
        //     "YB"
        // ],
        // ㄱ: [
        //     '김윤아',
        //     "김창완밴드",
        //     '김일두와 불세출',
        //     '갤럭시익스프레스',
        //     '국카스텐',
        //     '기프트',
        //     '검정치마',
        //     '권진아',
        // ],
        // ㄴ: [
        //     '노브레인',
        //     '나상현씨밴드',
        //     '너드커넥션',
        // ],
        // ㄷ: [
        //     '다브다',
        //     '다섯',
        //     '데이먼스 이어',
        //     '두억시니',
        // ],
        // ㄹ: [
        //     '로맨틱펀치',
        //     '루시',
        //     '로렌',
        // ],
        // ㅁ: [
        //     '못',
        //     '무한궤도',
        //     '마이앤트메리',
        //     '메써드',
        // ],
        // ㅂ: [
        //     '보수동쿨러',
        //     '브로큰발렌타인',
        //     '불고기디스코',
        // ],
        // ㅅ: [
        //     '사랑과 평화',
        //     '산울림',
        //     '새소년',
        //     '소란',
        //     '송골매',
        //     '시나위',
        //     '실리카겔',
        //     "쏜애플",
        //     '신해경',
        //     '세이수미',
        // ],
        // ㅇ: [
        //     '아디오스 오디오',
        //     '언니네 이발관',
        //     '이승윤',
        //     '이디오테잎',
        // ],
        // ㅈ: [
        //     '자우림',
        //     '죠지',
        //     '잠비나이',
        //     '정우',
        //     '잔나비',
        //     '장기하와 얼굴들',
        // ],
        // ㅊ: [
        //     '채무자들',
        //     '체리필터',
        // ],
        // ㅋ: [
        //     '크라잉 넛',
        //     '카더가든',
        //     '키라라',
        // ],
        // ㅌ: [
        //     '터치드',
        // ],
        // ㅍ: [
        //     '파란노을',
        //     '포르노 그라피티',
        // ],
        // ㅎ: [
        //     '허니스트',
        //     '혁오',
        //     '혼즈',
        //     '행로난',
        //     '한로로',
        // ],
    }
})

export const bannerImgState = atom({
    key: 'bannerImgState',
    default:[],
})

export const setLoginState = atom({
    key:"setLoginState",
    default:false
})

export const writeState = atom({
    key: 'writeState',
    default:{
      postCategory:'',
      postTitle:'',
      postContent:'',
      isFixed:'',
      bandIndex:''
    }
})

export const userDataState = atom({
    key:'userDataState',
    default:{
        nickname: "",
        profileimg:"img/avatar.png",
        password:"",
        newPassword:"",
        passwordConfirm:"",
        isPasswordConfirm:"",
    }
})

export const postDetailState = atom({
    key:'postDetailState',
    default:{},
})
export const bandDataState = atom({
    key:'bandDataState',
    default:[],
})

export const commentState = atom({
    key:"commentState",
    default:[],
})

export const replyState = atom({
    key:"replyState",
    default:[],
})
export const replyContentState = atom({
    key:"replyContentState",
    default:[],
})

export const afterModifyCommentState = atom({
    key:"afterModifyCommentState",
    default:'',
})

export const replyIndexState = atom({
    key:"replyIndexState",
    default:'',
})