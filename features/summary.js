import { parse, isToday, isYesterday, differenceInDays, isEqual } from 'date-fns';

export function Summary({ dates, freezeDates }) {
  dates = dates.map(date => parse(date, 'yyyy/MM/dd', new Date())).sort((a, b) => a - b);
  freezeDates = freezeDates.map(date => parse(date, 'yyyy/MM/dd', new Date())).sort((a, b) => a - b);

  let streaks = [];
  let freezePerStreak = [];
  let streakAfterFreeze = [];
  let longestStreak = 0;
  let todayInStreak = false;
  let withinCurrentStreak = false;

  let currentStreakCount = 1;
  let freezeCount = 0;

  for (let i = 1; i < dates.length; i++) {
    let diff = differenceInDays(dates[i], dates[i - 1]);

    if (diff === 1) {
      currentStreakCount++;
      if (freezeDatesHasDate(dates[i - 1], freezeDates) || freezeDatesHasDate(dates[i], freezeDates)) {
        freezeCount++;
      }
    } else {
      streaks.push(currentStreakCount);
      freezePerStreak.push(freezeCount);
      streakAfterFreeze.push(currentStreakCount - freezeCount);
      if (currentStreakCount - freezeCount > longestStreak) {
        longestStreak = currentStreakCount - freezeCount;
      }
      currentStreakCount = 1;
      freezeCount = 0;
    }
  }

  streaks.push(currentStreakCount);
  freezePerStreak.push(freezeCount);
  streakAfterFreeze.push(currentStreakCount - freezeCount);
  if (currentStreakCount - freezeCount > longestStreak) {
    longestStreak = currentStreakCount - freezeCount;
  }

  let lastDate = dates[dates.length - 1];

  if (isToday(lastDate)) {
    todayInStreak = true;
    withinCurrentStreak = true;
  } else if (isYesterday(lastDate)) {
    withinCurrentStreak = true;
  }

  return {
    currentStreak: streakAfterFreeze[streakAfterFreeze.length - 1],
    longestStreak: longestStreak,
    streaks: streaks,
    freezePerStreak: freezePerStreak,
    streakAfterFreeze: streakAfterFreeze,
    todayInStreak: todayInStreak,
    withinCurrentStreak: withinCurrentStreak
  };
}

function freezeDatesHasDate(date, freezeDates) {
  let left = 0;
  let right = freezeDates.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isEqual(freezeDates[mid], date)) {
      return true;
    } else if (differenceInDays(freezeDates[mid], date) < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
