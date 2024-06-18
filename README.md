# StreakFinal
A package to find streaks and freeze and updated streaks from a list of dates.
**Quick Example**
```js
import { Summary } from './features/summary.js';
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
  "2024-06-24",
  "2024-06-22",
  "2024-06-23",
  "2024-06-26",
  "2024-07-01"
];
const summaryResult = Summary({ dates, freezeDates });
console.log("Summary Result:", summaryResult);
```
returns
```js
Summary Result: {
  currentStreak: 2,
  longestStreak: 7,
  streaks: [ 10, 3, 3, 2 ],
  freezePerStreak: [ 3, 1, 2, 0 ],
  streakAfterFreeze: [ 7, 2, 1, 2 ],
  todayInStreak: false,
  withinCurrentStreak: false
}
```
