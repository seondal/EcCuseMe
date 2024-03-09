import { Facilities } from "@/data/facilities";

export const facilityNearGate3 = Facilities.filter(
  (item) => item.gate === 3
).sort((a, b) => b.room - a.room);

export const facilityNearGate4 = Facilities.filter(
  (item) => item.gate === 4
).sort((a, b) => a.room - b.room);
