import { format, parseISO, subDays, isSameDay } from 'date-fns';

export function trackRecord({ dates, length = 7, endDate = new Date() }) {
  dates = dates.map(date => parseISO(date)).sort((a, b) => a - b);
  endDate = typeof endDate === 'string' ? parseISO(endDate) : endDate;

  let trackRecord = {};
  for (let i = 0; i < length; i++) {
    let day = subDays(endDate, i);
    let found = dates.some(date => isSameDay(date, day));
    trackRecord[format(day, 'EEE MMM dd yyyy HH:mm:ss XXX')] = found;
  }

  return trackRecord;
}