# Streak End to End

Streak End to End is a Node.js module that provides functionality to manage streaks in a list of dates using the `date-fns` library. It offers three main features:

1. **Summary**: Finds streaks within a list of dates and returns information about the current streak, the longest streak, whether today is in the streak, and whether the current streak is still valid. It also handles freeze dates where the streak was paused.

2. **Streak Ranges**: Finds the start and end dates of each streak, in addition to the duration of each streak.

3. **Track Record**: Returns a list of dates from a specified date into the past with the provided dates marked as true.

## Installation

npm install streak-end-to-end

## Usage

```javascript
const { summary, streakRanges, trackRecord } = require('streak-end-to-end');

const dates = [
    "2024/06/15",
    "2024/06/16",
    "2024/06/17",
    "2024/06/18",
    "2024/06/19",
    "2024/06/20",
    "2024/06/21",
    "2024/06/22",
    "2024/06/23",
    "2024/06/24",
    "2024/06/26",
    "2024/06/27",
    "2024/06/28",
    "2024/06/30",
    "2024/07/01",
    "2024/07/02",
    "2024/07/04",
    "2024/07/05"
];
const freezeDates = ["2024/06/23", "2024/06/26", "2024/07/01"];

// Summary
const summaryResult = summary({ dates, freezeDates });
console.log(summaryResult);

// Streak Ranges
const streakRangesResult = streakRanges({ dates });
console.log(streakRangesResult);

// Track Record
const trackRecordResult = trackRecord({ dates, length: 10, endDate: new Date('2024/07/05') });
console.log(trackRecordResult);
API
summary({ dates, freezeDates })
Finds streaks within a list of dates and returns information about the current streak, the longest streak, whether today is in the streak, and whether the current streak is still valid.

dates: An array of strings representing dates in the format 'YYYY/MM/DD'.
freezeDates: An array of strings representing dates in the format 'YYYY/MM/DD' where the streak was paused.
Returns an object containing the summary information.

streakRanges({ dates })
Finds the start and end dates of each streak, in addition to the duration of each streak.

dates: An array of strings representing dates in the format 'YYYY/MM/DD'.
Returns an array of objects, each containing the start and end dates of a streak and its duration.

trackRecord({ dates, length, endDate })
Returns a list of dates from a specified date into the past with the provided dates marked as true.

dates: An array of strings representing dates in the format 'YYYY/MM/DD'.
length: The length of the track record.
endDate: The end date for the track record.
Returns an object where each key represents a date and its value represents whether it is in the track record.
