const NotClassRoomList = [
  127, 135, 145, 229, 246, 248, 249, 251, 202, 216, 227,
];

function closestExitByClassroom(classroom: number): number {
  if (classroom in NotClassRoomList) return 0;

  if (101 <= classroom && classroom <= 143) return 9;
  if (144 <= classroom && classroom <= 153) return 10;
  if (154 <= classroom && classroom <= 196) return 12;

  if (228 <= classroom && classroom <= 273) return 8;
  if (201 <= classroom && classroom <= 226) return 7;

  if (301 <= classroom && classroom <= 315) return 1;
  if (316 <= classroom && classroom <= 324) return 5;
  if (328 <= classroom && classroom <= 337) return 6;
  if (338 <= classroom && classroom <= 341) return 2;

  if (401 <= classroom && classroom <= 414) return 4;
  if (415 <= classroom && classroom <= 422) return 4;

  return 0;
}

function secondExitByExit(closestExit: number): number {
  switch (closestExit) {
    case 1:
      return 5;
    case 5:
      return 1;

    case 2:
      return 6;
    case 2:
      return 6;

    case 12:
      return 10;
    case 12:
      return 10;

    default:
      return 0;
  }
}

export interface ExitData {
  closestExit: number;
  secondExit: number;
}

export function exitDataByClassroom(classroom: number): ExitData {
  const closestExit = closestExitByClassroom(classroom);
  const secondExit = secondExitByExit(closestExit);

  return {
    closestExit,
    secondExit,
  };
}
