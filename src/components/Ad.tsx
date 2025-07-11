import Image from "next/image";
import Link from "next/link";

const LINK =
  "https://map.naver.com/p/search/%EC%B5%B8%EC%9D%B4%ED%94%BC%EC%9E%90/place/20859695?placePath=%3Fentry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=entry%3Dpll%26fromNxList%3Dtrue%26x%3D126.954686%26y%3D37.564827&searchType=place" as const;

export default function Ad() {
  return (
    <Link href={LINK} target="_blank">
      <button>
        <div className="relative w-full h-28">
          <Image
            src={"/image/pizza.png"}
            alt="pizza"
            fill
            className="object-cover"
          />
        </div>
        피자쵸이 서대문점 개맛도리
      </button>
    </Link>
  );
}
