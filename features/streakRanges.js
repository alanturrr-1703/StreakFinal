import { format, parseISO, differenceInDays } from 'date-fns';

export function streakRanges(dates) {
  if (dates.length === 0) return [];

  dates = dates.map(date => parseISO(date)).sort((a, b) => a - b);

  let ranges = [];
  let currentStreakStart = dates[0];

  for (let i = 1; i < dates.length; i++) {
    let diff = differenceInDays(dates[i], dates[i - 1]);
    if (diff > 1) {
      ranges.push({
        start: currentStreakStart,
        end: dates[i - 1],
        duration: differenceInDays(dates[i - 1], currentStreakStart) + 1
      });
      currentStreakStart = dates[i];
    }
  }

  ranges.push({
    start: currentStreakStart,
    end: dates[dates.length - 1],
    duration: differenceInDays(dates[dates.length - 1], currentStreakStart) + 1
  });

  return ranges.map(range => ({
    ...range,
    start: format(range.start, 'EEE MMM dd yyyy HH:mm:ss XXX'),
    end: range.end ? format(range.end, 'EEE MMM dd yyyy HH:mm:ss XXX') : null
  }));
}
