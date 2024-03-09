import Link from "next/link";
import EccImage from "./EccImage";

export default function Navigation() {
  return (
    <>
      <div className="flex justify-center gap-2">
        <Link href={"/"}>
          <button>강의실 찾기</button>
        </Link>
        <Link href={"/facility"}>
          <button>시설 찾기</button>
        </Link>
        <EccImage />
      </div>
      <div className="text-center">
        <div>문의, 기능제안, 오류신고 편하게 해주세요 !</div>
        <a href="https://toss.me/seondal">이 사이트 만든 사람</a>
      </div>
    </>
  );
}
