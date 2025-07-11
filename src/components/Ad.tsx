import Image from "next/image";
import Link from "next/link";

const LINK = "https://naver.me/xDs6vnPb" as const;

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
