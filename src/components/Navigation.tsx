import Link from "next/link";
import EccImage from "./EccImage";

export default function Navigation() {
  return (
    <>
      <div className="flex justify-center gap-2 [&_button]:bg-main [&_button]:text-black">
        <Link href={"/"}>
          <button>강의실 찾기</button>
        </Link>
        <Link href={"/facility"}>
          <button>시설 찾기</button>
        </Link>
        <EccImage image="/image/map.jpg" button="출구 위치 보기" />
      </div>
    </>
  );
}
