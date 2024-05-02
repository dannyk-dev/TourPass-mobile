export const TimeDataFiltersList = ["today", "yesterday", "late"] as const;

type TimeDataFiltersTuple = typeof TimeDataFiltersList;
export type TimeDataFilters = TimeDataFiltersTuple[number];
