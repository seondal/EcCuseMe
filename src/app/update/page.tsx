import URL from "@/constants/url";
import Updates from "@/data/updates";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <article>업데이트 내역</article>
      <div className="text-left flex flex-col-reverse">
        {Updates.map((item, idx) => (
          <article key={idx}>
            <header>
              <b>{item.date}</b>
            </header>
            <ul>
              {item.contents.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <Link href={URL.feedback} target="_blank">
        <button>나도 의견 남기고 업데이트 참여하기</button>
      </Link>
    </div>
  );
}
