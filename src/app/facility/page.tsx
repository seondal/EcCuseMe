import FacilityList from "@/components/FacilityList";
import { facilityNearGate3, facilityNearGate4 } from "@/utils/sortFacility";

export default function Page() {
  return (
    <>
      <div>재학생 아니어도 들어올 수 있는 지하4층 시설들</div>
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
    </>
  );
}
