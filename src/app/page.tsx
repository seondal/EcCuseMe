"use client";

import KakaoAdfit from "@/components/kakaoAdfit";
import { ExitData, exitDataByClassroom } from "@/utils/findExit";
import { useEffect, useState } from "react";

export default function Home() {
  const [classroom, setClassroom] = useState();
  const [data, setData] = useState<ExitData>();

  useEffect(() => {
    if (classroom) {
      setData(exitDataByClassroom(classroom));
    }
  }, [classroom]);

  useEffect(() => {
    if (!(data === undefined || data.closestExit === 0) && window.gtag) {
      console.log(classroom);
      window.gtag("event", "search", {
        classroom: classroom,
        // debug_mode: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      <article>
        이대역보다 출구가 많은 ECC 미로
        <br />
        강의실 번호를 입력하면 가까운 출구를 알려드려요
      </article>
      <article>
        <header className="flex font-bold items-center justify-center gap-2 text-3xl">
          <span>B </span>
          <input
            size={3}
            style={{ width: "auto", margin: 0 }}
            placeholder="151"
            inputMode="numeric"
            required
            name="classroom"
            maxLength={3}
            value={classroom}
            onChange={(e: any) => setClassroom(e.target.value)}
          />
          <span> 호</span>
        </header>
        <div>
          {data === undefined || data.closestExit === 0 ? (
            <>올바른 강의실 번호를 입력해주세요</>
          ) : (
            <>
              <div>
                가장 가까운 출구는 <b>{data?.closestExit}번</b> 출구입니다
              </div>
              {data?.secondExit !== 0 && (
                <div>
                  두번째로 가까운 출구는 <b>{data?.secondExit}번</b> 출구입니다
                </div>
              )}
            </>
          )}
        </div>
      </article>
      <KakaoAdfit width={320} height={100} unit={"DAN-UR1xj929Pmx2ug2Y"} />
    </div>
  );
}
