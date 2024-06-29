"use client";

import WholeImage from "@/components/EccImage";
import Update from "@/components/GimmeFeedback";
import KakaoAdfit from "@/components/kakaoAdfit";
import URL from "@/constants/url";
import { ExitData, exitDataByClassroom } from "@/utils/findExit";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [classroom, setClassroom] = useState(301);
  const [data, setData] = useState<ExitData>();

  useEffect(() => {
    setData(exitDataByClassroom(classroom));
  }, [classroom]);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div>이대역보다 출구가 많은 ECC 미로</div>
        <div>강의실 번호를 입력하면 가까운 출구를 알려드려요</div>
      </div>
      <div className="font-bold text-center my-4 text-3xl">
        <span>B </span>
        <input
          className="w-12 text-2xl"
          placeholder="151"
          inputMode="numeric"
          required
          name="classroom"
          maxLength={3}
          value={classroom}
          onChange={(e: any) => setClassroom(e.target.value)}
        />
        <span> 호</span>
      </div>
      <div className="bg-secondary p-4">
        {data?.closestExit === 0 ? (
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
      <KakaoAdfit width={320} height={100} unit={"DAN-UR1xj929Pmx2ug2Y"} />
      <div>
        <Link href={URL.cybercampus}>
          <button>사캠 동영상 다운받는 방법</button>
        </Link>
        <Update />
        <WholeImage
          button="앱처럼 사용하기"
          image="/image/webapp.png"
        />
      <div className="flex gap-4 justify-center mt-2 flex-wrap">
        <a href="https://toss.me/seondal/1886">
          <button>사이트 만든 사람</button>
        </a></div>
      </div>
    </div>
  );
}
