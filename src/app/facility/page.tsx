import FacilityList from "@/components/FacilityList";
import KakaoAdfit from "@/components/kakaoAdfit";
import { facilityNearGate3, facilityNearGate4 } from "@/utils/sortFacility";

export default function Page() {
  return (
    <>
      <article>
        재학생이 아니어도 이용 가능한 지하 4층
        <br />
        다양한 시설들을 위치 순서대로 보여드릴게요
      </article>
      <div className="flex gap-4 mt-4 justify-center">
        <article>
          <header>
            <b>3번 출구쪽</b>
          </header>
          <FacilityList data={facilityNearGate3} />
        </article>
        <article>
          <header>
            <b>4번 출구쪽</b>
          </header>
          <FacilityList data={facilityNearGate4} />
        </article>
      </div>
      <KakaoAdfit
        width={300}
        height={250}
        unit={"DAN-BY5knLz9snl3nk1A"}
        style="mt-4"
      />
    </>
  );
}
