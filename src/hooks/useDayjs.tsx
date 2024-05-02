import dayjs from "dayjs";
import { useEffect, useState } from "react";
import weekday from "dayjs/plugin/weekday";
import toObject from "dayjs/plugin/toObject";

dayjs.extend(weekday);
dayjs.extend(toObject);

export default function useDayjs() {
  const currentDate = dayjs(Date.now());

  console.log(dayjs().weekday(5));
}
