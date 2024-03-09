import { Facilities } from "@/data/facilities";

export const facilityNearGate3 = Facilities.filter(
  (item) => item.gate === 3
).toSorted((a, b) => b.room - a.room);

export const facilityNearGate4 = Facilities.filter(
  (item) => item.gate === 4
).toSorted((a, b) => a.room - b.room);
