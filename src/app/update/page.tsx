import URL from "@/constants/url";
import Updates from "@/data/updates";

export default function Page() {
  return (
    <div>
      <div>업데이트 내역</div>
      <div className="text-left flex flex-col">
        {Updates.map((item, idx) => (
          <div key={idx}>
            <h3>{item.date}</h3>
            <ul>
              {item.contents.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a href={URL.feedback}>
        <button>나도 의견 남기고 업데이트 참여하기</button>
      </a>
    </div>
  );
}
