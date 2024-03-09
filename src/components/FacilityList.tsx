import { FacilityI } from "@/data/facilities";
import Image from "next/image";

interface FacilityListI {
  data: FacilityI[];
}

export default function FacilityList({ data }: FacilityListI) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item) =>
        item.isGate === "Yes" ? (
          <div key={item.id} className="bg-main text-black py-4">
            <b>{item.name}</b>
            <div className="text-xs">{item.explain}</div>
          </div>
        ) : (
          <div
            key={item.id}
            className="flex flex-col justify-center bg-secondary rounded-lg h-28 px-4">
            {item.image && (
              <div className="h-8 relative mb-2">
                <Image
                  alt=""
                  objectFit="contain"
                  fill
                  src={`/logo/${item.image}`}
                />
              </div>
            )}
            <b>{item.name}</b>
            <div className="text-xs">B{item.room}호</div>
            <div className="text-xs">{item.explain}</div>
          </div>
        )
      )}
    </div>
  );
}
