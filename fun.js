const { summary } = require('./features/summary');
const { streakRanges } = require('./features/streakRanges');
const { trackRecord } = require('./features/trackRecord');

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
