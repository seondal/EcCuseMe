import Updates from "@/data/updates";

export default function Update() {
  return (
    <div>
      <div>업데이트 내역</div>
      <ul className="text-left flex flex-col-reverse">
        {Updates.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
