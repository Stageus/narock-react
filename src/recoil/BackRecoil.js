import { atom, selector } from "recoil";

export const bandnameState = atom({
    "key": "bandname",
    "default": {
        기타: [
            "9001",
            "92914",
            '250',
            '10CM',
        ],
        A: [
            "AC/DC"
        ],
        B: [
            "BLUR",
        ],
        C: [
            "CNBLUE",
            "CHERRY FILTER",
            "COLDPLAY",
        ],
        D: [
            "DAY6",
        ],
        E: [
            ""
        ],
        F: [
            "FALL OUT BOY",
        ],
        G: [
            "GINGER ROOT",
            "GUNS N ROSES",
            "GREEN DAY",
        ],
        H: [
            "HITSUJI BUNGAKU",
            "HONNE",
        ],
        K: [
            "KARDI",
            "KIRINJI",
        ],
        L: [
            "LIAM GALLAGHER",
            "LANY",
            "LED ZEPPELIN",
        ],
        M: [
            "METALLICA",
            "MUSE",
        ],
        N: [
            "N.EX.T",
            "NELL",
            "NUMCHA",
            "NIRVANA",
        ],
        O: [
            "OTOBOKE BEAVER",
            "OASIS",
        ],
        P: [
            "PETROLZ",
            "PINK FLOYD",
        ],
        Q: [
            "QUEEN"
        ],
        R: [
            "RIDE",
            "RADIO HEAD",
        ],
        S: [
            "SNAKE CHICKEN SOUP",
            "SNOW PATROL",
        ],
        T: [
            "THE POLES",
            "THE VOLUNTEERS",
            "THE STROKES",
            "THE SOUND",
            "TWO DOOR CINEMA CLUB",
            "THE BEATLES",
            "THE ROLLING STONES",
            "THE BEACH BOYS",
            "THE CALLING",
            "THE 1975",
        ],
        W: [
            "WAVE TO EARTH",
            "WENDY WANDER",
        ],
        X: [
            "Xdinary Heroes"
        ],
        Y: [
            "YB"
        ],
        ㄱ: [
            '김윤아',
            "김창완밴드",
            '김일두와 불세출',
            '갤럭시익스프레스',
            '국카스텐',
            '기프트',
            '검정치마',
            '권진아',
        ],
        ㄴ: [
            '노브레인',
            '나상현씨밴드',
            '너드커넥션',
        ],
        ㄷ: [
            '다브다',
            '다섯',
            '데이먼스 이어',
            '두억시니',
        ],
        ㄹ: [
            '로맨틱펀치',
            '루시',
            '로렌',
        ],
        ㅁ: [
            '못',
            '무한궤도',
            '마이앤트메리',
            '메써드',
        ],
        ㅂ: [
            '보수동쿨러',
            '브로큰발렌타인',
            '불고기디스코',
        ],
        ㅅ: [
            '사랑과 평화',
            '산울림',
            '새소년',
            '소란',
            '송골매',
            '시나위',
            '실리카겔',
            "쏜애플",
            '신해경',
            '세이수미',
        ],
        ㅇ: [
            '아디오스 오디오',
            '언니네 이발관',
            '이승윤',
            '이디오테잎',
        ],
        ㅈ: [
            '자우림',
            '죠지',
            '잠비나이',
            '정우',
            '잔나비',
            '장기하와 얼굴들',
        ],
        ㅊ: [
            '채무자들',
            '체리필터',
        ],
        ㅋ: [
            '크라잉 넛',
            '카더가든',
            '키라라',
        ],
        ㅌ: [
            '터치드',
        ],
        ㅍ: [
            '파란노을',
            '포르노 그라피티',
        ],
        ㅎ: [
            '허니스트',
            '혁오',
            '혼즈',
            '행로난',
            '한로로',
        ],
    }
})

export const popularPostState = atom(
    {
        "key":"popularPost",
        "default": [
            {
              "number": 1,
              "postTitle": "제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.",
              "boardName": "실리카겔",
              "like": 250,
              "postTimestamp": "2023.08.10",
              "postViews":623,
            },
            {
              "number": 2,
              "postTitle": "다른 제목입니다.2",
              "boardName": "게시판 이름",
              "like": 120,
              "postTimestamp": "2023.08.11",
              "postViews":623
            },
            {
              "number": 3,
              "postTitle": "다른 제목입니다.3",
              "boardName": "게시판 이름",
              "like": 120,
              "postTimestamp": "2023.08.12",
              "postViews":623
            },
            {
              "number": 4,
              "postTitle": "다른 제목입니다.4",
              "boardName": "게시판 이름",
              "like": 120,
              "postTimestamp": "2023.08.13",
              "postViews":623
            },
            {
              "number": 5,
              "postTitle": "다른 제목입니다.5",
              "boardName": "게시판 이름",
              "like": 120,
              "postTimestamp": "2023.08.14",
              "postViews":623
            }
        ]
    }
)

export const postState = atom(
    {
        "key":"postState",
        "default": [
            {
              "postIndex": 1,
              "postTitle": "실리카겔1",
              "postContent": "첫번째 게시물입니다.",
              "postCategory": "notice",
              "bandName":"실리카겔",
              "like": 9999,
              "postTimestamp": "2023.08.10",
              "postViews":623,
              "postWriter": '지짱',
              "postImgUrl": "/img/avatar.png",
              "comment": [{
                "commentIndex": 1,
                "commentTimestamp": "2023.08.12",
                "commentContent": "코멘트 테스트 커뮤니티",
                "postIndex": 1,
                "userIndex": 1,
                "commentWriter":"김지현"
                }],
                "reply": [{
                    "replyIndex": 1,
                    "replyTimestamp": "2023.08.12",
                    "replyContent": "리플 테스트1",
                    "commentIndex": 1,
                    "userIndex": 1,
                    "replyWriter":"지짱",
                    "replyImgUrl":"/img/avatar.png",
                }]
            },
            {
              "postIndex": 1,
              "postTitle": "실리카겔 연말 콘서트",
              "postContent": "실리카겔 연말 콘서트 11/11 예매 완 ㅋ",
              "postCategory": "concertinfo",
              "bandName":"실리카겔",
              "like": 9999,
              "postTimestamp": "2023.08.10",
              "postViews":623,
              "postWriter": '지짱',
              "postImgUrl": "/img/avatar.png",
              "comment": [{
                "commentIndex": 1,
                "commentTimestamp": "2023.08.12",
                "commentContent": "코멘트 테스트 커뮤니티",
                "postIndex": 1,
                "userIndex": 1,
                "commentWriter":"김지현"
                }],
                "reply": [{
                    "replyIndex": 1,
                    "replyTimestamp": "2023.08.12",
                    "replyContent": "리플 테스트1",
                    "commentIndex": 1,
                    "userIndex": 1,
                    "replyWriter":"지짱",
                    "replyImgUrl":"/img/avatar.png",
                }]
            },
            {
              "postIndex": 2,
              "postTitle": "커뮤니티 두번째 게시물",
              "postContent": "두번째 게시물입니다.",
              "postCategory": "community",
              "bandName":"92914",
              "like": 120,
              "postTimestamp": "2023.08.11",
              "postViews":623,
              "postWriter": '지짱',
              "postImgUrl": "/img/avatar.png",
              "comment": [{
                "commentIndex": 1,
                "commentTimestamp": "2023.08.12",
                "commentContent": "코멘트 테스트~~~~",
                "postIndex": 2,
                "userIndex": 1,
                "commentWriter":"유원석"
                }],
                "reply": [{
                    "replyIndex": 1,
                    "replyTimestamp": "2023.08.12",
                    "replyContent": "리플 테스트1",
                    "commentIndex": 1,
                    "userIndex": 1,
                    "replyWriter":"지짱",
                    "replyImgUrl":"/img/avatar.png",
                }]
            },
            {
              "postIndex": 1,
              "postTitle": "새소식 게시물",
              "postContent": "세번째 게시물입니다.",
              "postCategory": "news",
              "bandName":"",
              "like": 120,
              "postTimestamp": "2023.08.12",
              "postViews":623,
              "postWriter": '지짱',
              "postImgUrl": "/img/avatar.png",
              "comment": [{
                "commentIndex": 1,
                "commentTimestamp": "2023.08.12",
                "commentContent": "코멘트 테스트1",
                "postIndex": 3,
                "userIndex": 1,
                "commentWriter":"유원석",
                "commentImgUrl":"/img/avatar.png",
                },
                {
                "commentIndex": 2,
                "commentTimestamp": "2023.08.12",
                "commentContent": "코멘트 테스트2",
                "postIndex": 3,
                "userIndex": 1,
                "commentWriter":"유원석",
                "commentImgUrl":"/img/avatar.png",
                }],
                "reply": [{
                    "replyIndex": 1,
                    "replyTimestamp": "2023.08.12",
                    "replyContent": "리플 테스트1",
                    "commentIndex": 1,
                    "userIndex": 1,
                    "replyWriter":"지짱",
                    "replyImgUrl":"/img/avatar.png",
                }]
            },{
                "postIndex": 2,
                "postTitle": "새소식 게시물",
                "postContent": "세번째 게시물입니다.",
                "postCategory": "news",
                "bandName":"",
                "like": 120,
                "postTimestamp": "2023.08.12",
                "postViews":623,
                "postWriter": '지짱',
                "postImgUrl": "/img/avatar.png",
                "comment": [{
                  "commentIndex": 1,
                  "commentTimestamp": "2023.08.12",
                  "commentContent": "코멘트 테스트1",
                  "postIndex": 3,
                  "userIndex": 1,
                  "commentWriter":"유원석",
                  "commentImgUrl":"/img/avatar.png",
                  },
                  {
                  "commentIndex": 2,
                  "commentTimestamp": "2023.08.12",
                  "commentContent": "코멘트 테스트2",
                  "postIndex": 3,
                  "userIndex": 1,
                  "commentWriter":"유원석",
                  "commentImgUrl":"/img/avatar.png",
                  }],
                  "reply": [{
                      "replyIndex": 1,
                      "replyTimestamp": "2023.08.12",
                      "replyContent": "리플 테스트1",
                      "commentIndex": 1,
                      "userIndex": 1,
                      "replyWriter":"지짱",
                      "replyImgUrl":"/img/avatar.png",
                  }]
              },{
                "postIndex": 3,
                "postTitle": "새소식 게시물",
                "postContent": "세번째 게시물입니다.",
                "postCategory": "news",
                "bandName":"",
                "like": 120,
                "postTimestamp": "2023.08.12",
                "postViews":623,
                "postWriter": '지짱',
                "postImgUrl": "/img/avatar.png",
                "comment": [{
                  "commentIndex": 1,
                  "commentTimestamp": "2023.08.12",
                  "commentContent": "코멘트 테스트1",
                  "postIndex": 3,
                  "userIndex": 1,
                  "commentWriter":"유원석",
                  "commentImgUrl":"/img/avatar.png",
                  },
                  {
                  "commentIndex": 2,
                  "commentTimestamp": "2023.08.12",
                  "commentContent": "코멘트 테스트2",
                  "postIndex": 3,
                  "userIndex": 1,
                  "commentWriter":"유원석",
                  "commentImgUrl":"/img/avatar.png",
                  }],
                  "reply": [{
                      "replyIndex": 1,
                      "replyTimestamp": "2023.08.12",
                      "replyContent": "리플 테스트1",
                      "commentIndex": 1,
                      "userIndex": 1,
                      "replyWriter":"지짱",
                      "replyImgUrl":"/img/avatar.png",
                  }]
              },{
                "postIndex": 4,
                "postTitle": "새소식 게시물",
                "postContent": "세번째 게시물입니다.",
                "postCategory": "news",
                "bandName":"",
                "like": 120,
                "postTimestamp": "2023.08.12",
                "postViews":623,
                "postWriter": '지짱',
                "postImgUrl": "/img/avatar.png",
                "comment": [{
                  "commentIndex": 1,
                  "commentTimestamp": "2023.08.12",
                  "commentContent": "코멘트 테스트1",
                  "postIndex": 3,
                  "userIndex": 1,
                  "commentWriter":"유원석",
                  "commentImgUrl":"/img/avatar.png",
                  },
                  {
                  "commentIndex": 2,
                  "commentTimestamp": "2023.08.12",
                  "commentContent": "코멘트 테스트2",
                  "postIndex": 3,
                  "userIndex": 1,
                  "commentWriter":"유원석",
                  "commentImgUrl":"/img/avatar.png",
                  }],
                  "reply": [{
                      "replyIndex": 1,
                      "replyTimestamp": "2023.08.12",
                      "replyContent": "리플 테스트1",
                      "commentIndex": 1,
                      "userIndex": 1,
                      "replyWriter":"지짱",
                      "replyImgUrl":"/img/avatar.png",
                  }]
              },{
                "postIndex": 5,
                "postTitle": "새소식 게시물",
                "postContent": "세번째 게시물입니다.",
                "postCategory": "news",
                "bandName":"",
                "like": 120,
                "postTimestamp": "2023.08.12",
                "postViews":623,
                "postWriter": '지짱',
                "postImgUrl": "/img/avatar.png",
                "comment": [{
                  "commentIndex": 1,
                  "commentTimestamp": "2023.08.12",
                  "commentContent": "코멘트 테스트1",
                  "postIndex": 3,
                  "userIndex": 1,
                  "commentWriter":"유원석",
                  "commentImgUrl":"/img/avatar.png",
                  },
                  {
                  "commentIndex": 2,
                  "commentTimestamp": "2023.08.12",
                  "commentContent": "코멘트 테스트2",
                  "postIndex": 3,
                  "userIndex": 1,
                  "commentWriter":"유원석",
                  "commentImgUrl":"/img/avatar.png",
                  }],
                  "reply": [{
                      "replyIndex": 1,
                      "replyTimestamp": "2023.08.12",
                      "replyContent": "리플 테스트1",
                      "commentIndex": 1,
                      "userIndex": 1,
                      "replyWriter":"지짱",
                      "replyImgUrl":"/img/avatar.png",
                  }]
              },{
                "postIndex": 6,
                "postTitle": "새소식 게시물",
                "postContent": "세번째 게시물입니다.",
                "postCategory": "news",
                "bandName":"",
                "like": 120,
                "postTimestamp": "2023.08.12",
                "postViews":623,
                "postWriter": '지짱',
                "postImgUrl": "/img/avatar.png",
                "comment": [{
                  "commentIndex": 1,
                  "commentTimestamp": "2023.08.12",
                  "commentContent": "코멘트 테스트1",
                  "postIndex": 3,
                  "userIndex": 1,
                  "commentWriter":"유원석",
                  "commentImgUrl":"/img/avatar.png",
                  },
                  {
                  "commentIndex": 2,
                  "commentTimestamp": "2023.08.12",
                  "commentContent": "코멘트 테스트2",
                  "postIndex": 3,
                  "userIndex": 1,
                  "commentWriter":"유원석",
                  "commentImgUrl":"/img/avatar.png",
                  }],
                  "reply": [{
                      "replyIndex": 1,
                      "replyTimestamp": "2023.08.12",
                      "replyContent": "리플 테스트1",
                      "commentIndex": 1,
                      "userIndex": 1,
                      "replyWriter":"지짱",
                      "replyImgUrl":"/img/avatar.png",
                  }]
              },
            {
              "postIndex": 4,
              "postTitle": "쏜애플 게시물입니덩",
              "postContent": "휴.. 어렵다 참...",
              "postCategory": "concertinfo",
              "bandName":"쏜애플",
              "like": 120,
              "postTimestamp": "2023.08.12",
              "postViews":623,
              "postWriter": '지짱',
              "postImgUrl": "/img/avatar.png",
              "comment": [{
                "commentIndex": 1,
                "commentTimestamp": "2023.08.12",
                "commentContent": "쏜애플 개조와",
                "postIndex": 3,
                "userIndex": 1,
                "commentWriter":"유원석",
                "commentImgUrl":"/img/avatar.png",
                },
                {
                "commentIndex": 2,
                "commentTimestamp": "2023.08.12",
                "commentContent": "근데 왜 두번째 코멘트는 안나오지",
                "postIndex": 3,
                "userIndex": 1,
                "commentWriter":"유원석",
                "commentImgUrl":"/img/avatar.png",
                }],
                "reply": [{
                    "replyIndex": 1,
                    "replyTimestamp": "2023.08.12",
                    "replyContent": "리플 테스트1",
                    "commentIndex": 1,
                    "userIndex": 1,
                    "replyWriter":"지짱",
                    "replyImgUrl":"/img/avatar.png",
                }]
            }
        ]
    }
)

export const bannerImgState = atom({
    key: 'bannerImgState',
    default:[],
})

export const combinedPostState = selector({
    key:"combinedPostState",
    get:({get}) => {
        const bandPost = get(postState);
        // const noticePost = get(noticePostState);
        // const newsPost = get(newsPostState);
        // const communityPost = get(communityPostState);

        const combinedPost = [...bandPost/* , ...noticePost, ...newsPost, ...communityPost */]
        
        return combinedPost;
    }
})

export const userState = atom({
    key: "userState",
    default:[
        {
            id:1,
            userId:"kjhwlgusdl",
            nickname:"지짱",
            joinpostTimestamp:"2023-09-17",
            role:"일반 회원",
        },
        {
            id:2,
            userId:"60231",
            nickname:"관리자",
            joinpostTimestamp:"2023-09-17",
            role:"게시판 지기",
            
        },
        {
            id:3,
            userId:"daiso",
            nickname:"다이소",
            joinpostTimestamp:"2023-09-17",
            role:"일반 회원",
        }
    ]
    
})

export const commentState = atom({
    key: "commentState",
    default:[
        {
            "postIndex": 5,
            "boardName": "쏜애플",
            "postContent": "댓글이다제~",
            "postTimestamp": "2023.09.15 15:00",
            "postWriter": '지짱'
        },
        {
            "postIndex": 5,
            "boardName": "쏜애플",
            "postContent": "댓글 또있음ㅋ",
            "postTimestamp": "2023.09.15 15:30",
            "postWriter": '댓글봇'
        },
    
    ]
})

export const requestState = atom({
    key:"requestState",
    default:[
        {
            id:1,
            userId:"daiso",
            nickname: "다이소",
            requestBoard:"새소년",
            requestpostTimestamp:"2023.10.01",
        },
        {
            id:2,
            userId:"kjhwlgusdl",
            nickname: "지짱",
            requestBoard:"실리카겔",
            requestpostTimestamp:"2023.10.02",
        },
        {
            id:3,
            userId:"60231",
            nickname: "관리자",
            requestBoard:"신해경",
            requestpostTimestamp:"2023.10.03",
        },
    ]
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