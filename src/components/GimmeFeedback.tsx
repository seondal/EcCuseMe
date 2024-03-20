import URL from "@/constants/url";
import Link from "next/link";

export default function GimmeFeedback() {
  return (
    <div className="text-center my-4">
      <div>문의, 기능제안, 오류신고 편하게 해주세요!</div>
      <div>보내주신 의견들을 바로 반영할게요</div>
      <div className="flex gap-4 justify-center mt-2 flex-wrap">
        <a href={URL.feedback}>
          <button>제작자에게 말걸기</button>
        </a>
        <Link href={"/update"}>
          <button>릴리즈 노트</button>
        </Link>
      </div>
    </div>
  );
}
