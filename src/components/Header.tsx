import URL from "@/constants/url";
import Link from "next/link";
import WholeImage from "./WholeImage";

const Navigation = [
  { link: "/", text: "강의실 찾기" },
  { link: "/facility", text: "시설 찾기" },
  { link: "/update", text: "릴리즈 노트" },
];
export default function Header() {
  return (
    <header>
      <h2>
        <strong className="text-main">Ecc</strong>use Me
      </h2>
      <nav>
        <ul className="flex-wrap justify-center">
          {Navigation.map((item) => (
            <li key={item.link}>
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
          <li>
            <Link href={URL.feedback} target="_blank">
              피드백 남기기
            </Link>
          </li>
          <li>
            <WholeImage image="/image/webapp.png">
              <button className="">앱 처럼 사용하기</button>
            </WholeImage>
          </li>
          <li>
            <WholeImage image="/image/map.jpg">
              <button className="">출구 위치</button>
            </WholeImage>
          </li>
        </ul>
      </nav>
    </header>
  );
}
