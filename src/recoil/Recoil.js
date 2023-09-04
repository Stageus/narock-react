import { atom } from "recoil";

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
              "date": "2023.08.10",
              "view":623
            },
            {
              "number": 2,
              "postTitle": "다른 제목입니다.2",
              "boardName": "게시판 이름",
              "like": 120,
              "date": "2023.08.11",
              "view":623
            },
            {
              "number": 3,
              "postTitle": "다른 제목입니다.3",
              "boardName": "게시판 이름",
              "like": 120,
              "date": "2023.08.12",
              "view":623
            },
            {
              "number": 4,
              "postTitle": "다른 제목입니다.4",
              "boardName": "게시판 이름",
              "like": 120,
              "date": "2023.08.13",
              "view":623
            },
            {
              "number": 5,
              "postTitle": "다른 제목입니다.5",
              "boardName": "게시판 이름",
              "like": 120,
              "date": "2023.08.14",
              "view":623
            }
        ]
    }
)

export const postState = atom(
    {
        "key":"postState",
        "default": [
            {
              "postId": 1,
              "postTitle": "첫번째 게시물",
              "content": "첫번째 게시물입니다.",
              "boardName": "실리카겔",
              "like": 9999,
              "date": "2023.08.10",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 2,
              "postTitle": "두번째 게시물",
              "content": "두번째 게시물입니다.",
              "boardName": "ELLE GARDEN",
              "like": 120,
              "date": "2023.08.11",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 3,
              "postTitle": "세번째 게시물임 ㅋㅋ",
              "content": "세번째 게시물입니다.",
              "boardName": "실리카겔",
              "like": 120,
              "date": "2023.08.12",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 4,
              "postTitle": "10번째 게시물임",
              "content": "구라임 4번째임 ㅋㅋ",
              "boardName": "AC/DC",
              "like": 120,
              "date": "2023.08.13",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 5,
              "postTitle": "제목 뭐하지?",
              "content": "이것은 더미데이터",
              "boardName": "쏜애플",
              "like": 120,
              "date": "2023.08.14",
              "view":623,
              "writer": '지짱'
            }
        ]
    }
)

export const noticePostState = atom(
    {
        "key":"noticePost",
        "default": [
            {
              "postId": 1,
              "postTitle": "공지사항 첫번째 게시물",
              "content": "첫번째 게시물입니다.",
              "boardName": "실리카겔",
              "like": 9999,
              "date": "2023.08.10",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 2,
              "postTitle": "공지사항 두번째 게시물",
              "content": "두번째 게시물입니다.",
              "boardName": "ELLE GARDEN",
              "like": 120,
              "date": "2023.08.11",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 3,
              "postTitle": "공지사항 세번째 게시물임 ㅋㅋ",
              "content": "세번째 게시물입니다.",
              "boardName": "신해경",
              "like": 120,
              "date": "2023.08.12",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 4,
              "postTitle": "공지사항 10번째 게시물임",
              "content": "구라임 4번째임 ㅋㅋ",
              "boardName": "AC/DC",
              "like": 120,
              "date": "2023.08.13",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 5,
              "postTitle": "공지사항 제목 뭐하지?",
              "content": "이것은 더미데이터",
              "boardName": "쏜애플",
              "like": 120,
              "date": "2023.08.14",
              "view":623,
              "writer": '지짱'
            }
        ]
    }
)
export const newsPostState = atom(
    {
        "key":"newsPost",
        "default": [
            {
              "postId": 1,
              "postTitle": "새소식 첫번째 게시물",
              "content": "첫번째 게시물입니다.",
              "boardName": "실리카겔",
              "like": 9999,
              "date": "2023.08.10",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 2,
              "postTitle": "새소식 두번째 게시물",
              "content": "두번째 게시물입니다.",
              "boardName": "ELLE GARDEN",
              "like": 120,
              "date": "2023.08.11",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 3,
              "postTitle": "새소식 세번째 게시물임 ㅋㅋ",
              "content": "세번째 게시물입니다.",
              "boardName": "신해경",
              "like": 120,
              "date": "2023.08.12",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 4,
              "postTitle": "새소식 10번째 게시물임",
              "content": "구라임 4번째임 ㅋㅋ",
              "boardName": "AC/DC",
              "like": 120,
              "date": "2023.08.13",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 5,
              "postTitle": "새소식 제목 뭐하지?",
              "content": "이것은 더미데이터",
              "boardName": "쏜애플",
              "like": 120,
              "date": "2023.08.14",
              "view":623,
              "writer": '지짱'
            }
        ]
    }
)
export const communityPostState = atom(
    {
        "key":"communityPost",
        "default": [
            {
              "postId": 1,
              "postTitle": "커뮤니티 첫번째 게시물",
              "content": "첫번째 게시물입니다.",
              "boardName": "실리카겔",
              "like": 9999,
              "date": "2023.08.10",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 2,
              "postTitle": "커뮤니티 두번째 게시물",
              "content": "두번째 게시물입니다.",
              "boardName": "ELLE GARDEN",
              "like": 120,
              "date": "2023.08.11",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 3,
              "postTitle": "커뮤니티 세번째 게시물임 ㅋㅋ",
              "content": "세번째 게시물입니다.",
              "boardName": "신해경",
              "like": 120,
              "date": "2023.08.12",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 4,
              "postTitle": "커뮤니티 10번째 게시물임",
              "content": "구라임 4번째임 ㅋㅋ",
              "boardName": "AC/DC",
              "like": 120,
              "date": "2023.08.13",
              "view":623,
              "writer": '지짱'
            },
            {
              "postId": 5,
              "postTitle": "커뮤니티 제목 뭐하지?",
              "content": "이것은 더미데이터",
              "boardName": "쏜애플",
              "like": 120,
              "date": "2023.08.14",
              "view":623,
              "writer": '지짱'
            }
        ]
    }
)