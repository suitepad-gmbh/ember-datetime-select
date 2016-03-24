import { sameDay } from 'ember-datetime-select/utils/helpers';

export default function dates(start, end, sched) {
  if (!start || !end || !sched) {
    return [];
  }

  let schedule = later.schedule(sched);
  let date = start;
  let result = [];
  let last;
  while (date < end) {
    date = schedule.next(1, new Date(date.getTime() + 1000));
    if (!last || !sameDay(date, last)) {
      result.push(date);
      last = date;
    }
  }
  return result;
}
