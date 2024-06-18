const { differenceInDays, isToday, isYesterday, parseISO } = require('date-fns');

export function Summary({ dates, freezeDates }) {
  // Parse and sort dates
  dates = dates.map(date => parseISO(date)).sort((a, b) => a - b);
  freezeDates = freezeDates.map(date => parseISO(date)).sort((a, b) => a - b);

  // Initialize variables
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
      // Increment streak count for consecutive dates and increment freeze count for freeze dates in that streak
      currentStreakCount++;
      if (freezeDates.includes(dates[i])) {
        freezeCount++;
      }
    } else {
      // Finalize the current streak and reset counts
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

  // Push the last streak
  streaks.push(currentStreakCount);
  freezePerStreak.push(freezeCount);
  streakAfterFreeze.push(currentStreakCount - freezeCount);
  if (currentStreakCount - freezeCount > longestStreak) {
    longestStreak = currentStreakCount - freezeCount;
  }

  // Determine the current streak
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
    streakAfterFreeze:streakAfterFreeze,
    todayInStreak: todayInStreak,
    withinCurrentStreak: withinCurrentStreak
  };
}
module.exports{Summary};
