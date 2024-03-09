interface FacilityI {
  name: string;
  explain: string;
  image?: string;
  room?: number;
  gate: 3 | 4;
}

export const Facilities: FacilityI[] = [
  {
    name: "휘트니스센터",
    explain: "헬스장",
    image: "",
    room: 422,
    gate: 4,
  },
  {
    name: "CU",
    explain: "편의점",
    image: "cu.svg",
    room: 420,
    gate: 4,
  },
  {
    name: "후지제록스",
    explain: "복사, 제본",
    image: "fuji.png",
    room: 419,
    gate: 4,
  },
  {
    name: "구내 안경점",
    explain: "안경점",
    image: "",
    room: 418,
    gate: 4,
  },
  {
    name: "꽃집",
    explain: "있나??",
    image: "",
    room: 417,
    gate: 4,
  },
  {
    name: "스타벅스",
    explain: "카공",
    image: "starbucks.svg",
    room: 415,
    gate: 4,
  },
  {
    name: "닥터로빈",
    explain: "밥",
    image: "drRobbin.png",
    room: 401,
    gate: 4,
  },
  {
    name: "아트하우스 모모",
    explain: "영화관",
    image: "momo.jpeg",
    room: 402,
    gate: 3,
  },
  {
    name: "ECC 극장",
    explain: "영화관이랑 다른건가?",
    image: "",
    room: 403,
    gate: 3,
  },
  {
    name: "세이지 약국",
    explain: "약국",
    image: "pharmacy.jpeg",
    room: 404,
    gate: 3,
  },
  {
    name: "샐러디",
    explain: "샐러드",
    image: "salady.png",
    room: 404,
    gate: 3,
  },
  {
    name: "신한은행",
    explain: "은행",
    image: "sinhan.png",
    room: 405,
    gate: 3,
  },
  {
    name: "뚜레쥬르",
    explain: "빵",
    image: "tousLesJours.svg",
    room: 406,
    gate: 3,
  },
  {
    name: "마이델플레이스",
    explain: "푸드코트",
    image: "",
    room: 407,
    gate: 3,
  },
  {
    name: "교보문고",
    explain: "서점",
    image: "kyobo.png",
    room: 409,
    gate: 3,
  },
  {
    name: "생협 기념품점",
    explain: "기념품샵",
    image: "",
    room: 410,
    gate: 3,
  },
  {
    name: "빚은",
    explain: "떡",
    image: "ricecake.svg",
    room: 411,
    gate: 3,
  },
  {
    name: "이삼봉홀",
    explain: "",
    image: "",
    room: 412,
    gate: 3,
  },
  {
    name: "이화김밥",
    explain: "밥",
    image: "",
    room: 417,
    gate: 3,
  },
  {
    name: "삼성홀",
    explain: "크다",
    image: "samsung.png",
    room: 414,
    gate: 3,
  },
];
