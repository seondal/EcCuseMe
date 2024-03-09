import FacilityList from "@/components/FacilityList";
import KakaoAdfit from "@/components/kakaoAdfit";
import { facilityNearGate3, facilityNearGate4 } from "@/utils/sortFacility";

export default function Page() {
  return (
    <>
      <div>재학생 아니어도 이용 가능한 지하 4층</div>
      <div>시설 위치 순서대로 보기</div>
      <div className="flex gap-4 mt-4 justify-center">
        <div>
          <h3>3번 출구쪽</h3>
          <FacilityList data={facilityNearGate3} />
        </div>
        <div>
          <h3>4번 출구쪽</h3>
          <FacilityList data={facilityNearGate4} />
        </div>
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
