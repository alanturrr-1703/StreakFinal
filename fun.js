import { Summary } from './features/summary.js';
import { streakRanges } from './features/streakRanges.js';
import { trackRecord } from './features/trackRecord.js';

const dates = [
  "2024-06-15",
  "2024-06-16",
  "2024-06-17",
  "2024-06-18",
  "2024-06-19",
  "2024-06-20",
  "2024-06-21",
  "2024-06-22",
  "2024-06-23",
  "2024-06-24",
  "2024-06-26",
  "2024-06-27",
  "2024-06-28",
  "2024-06-30",
  "2024-07-01",
  "2024-07-02",
  "2024-07-04",
  "2024-07-05"
];

const freezeDates = [
  "2024-06-17",
  "2024-06-22",
  "2024-06-23",
  "2024-06-26",
  "2024-07-01"
];

// Example usage of Summary function
const summaryResult = Summary({ dates, freezeDates });
console.log("Summary Result:", summaryResult);

// Example usage of streakRanges function
const rangesResult = streakRanges(dates);
console.log("Streak Ranges Result:", rangesResult);

// Example usage of trackRecord function
const trackResult = trackRecord({ dates, length: 10, endDate: "2024-07-05" });
console.log("Track Record Result:", trackResult);
