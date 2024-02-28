// data.tsx
// Dates.tsx

export interface DateObject {
  date: number;
  day: string;
  month: string;
}

// Other code if present

const dates: DateObject[] = [
  { date: 15, day: "Mon", month: "Des" },
  { date: 16, day: "Mon", month: "Des" },
  { date: 17, day: "Mon", month: "Des" },
  { date: 16, day: "Mon", month: "Des" }
];

export default dates;
