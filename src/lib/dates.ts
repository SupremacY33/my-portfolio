const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatMonth(value: string): string {
  if (value === "Present") return value;
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

const toKey = (value: string) => (value === "Present" ? "9999-12" : value);

/** Overlap only when the month ranges share more than a boundary month. */
export function periodsOverlap(
  a: { startDate: string; endDate: string },
  b: { startDate: string; endDate: string },
): boolean {
  return a.startDate < toKey(b.endDate) && b.startDate < toKey(a.endDate);
}
