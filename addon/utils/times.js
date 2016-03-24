import { startOfDay, endOfDay } from 'ember-datetime-select/utils/helpers';

export default function times(date, sched) {
  if (!date || !sched) {
    return [];
  }

  let schedule = later.schedule(sched);
  let time = startOfDay(date);
  let end  = endOfDay(date);
  let result = [];
  while (time < end) {
    time = schedule.next(1, new Date(time.getTime() + 1000));
    if (time < end) {
      result.push(time);
    }
  }
  return result;
}
