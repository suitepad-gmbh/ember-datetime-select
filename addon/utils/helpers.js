import later from 'later';
import Ember from 'ember';

export function startOfDay(date) {
  let result = new Date(date);
  result
  result.setUTCHours(0);
  result.setUTCMinutes(0);
  result.setUTCSeconds(0);
  result.setUTCMilliseconds(0);
  return result;
}

export function endOfDay(date) {
  let result = new Date(date);
  result.setUTCHours(23);
  result.setUTCMinutes(59);
  result.setUTCSeconds(59);
  result.setUTCMilliseconds(999);
  return result;
}

export function sameDay(first, second) {
  if (!(first instanceof Date) || !(second instanceof Date)) {
    return false;
  }
  let sameYear  = (first.getYear()  === second.getYear());
  let sameMonth = (first.getMonth() === second.getMonth());
  let sameDate  = (first.getDate()  === second.getDate());
  return sameYear && sameMonth && sameDate;
}

export function sameTime(first, second) {
  if (!(first instanceof Date) || !(second instanceof Date)) {
    return false;
  }
  let sameHour   = (first.getHours()  === second.getHours());
  let sameMinute = (first.getMinutes() === second.getMinutes());
  return sameHour && sameMinute;
}

export function cronSchedule(sched) {
  if (typeof sched === 'string') {
    sched = sched.split(/\W*;\W*/);
  }
  if (!(sched instanceof Array)) {
    throw new Error('Array or String required');
  }
  let parsed = Ember.A(sched.map((s) => {
    return later.parse.cron(s);
  }));
  let exceptions = [].concat(...parsed.mapBy('exceptions'));
  let schedules  = [].concat(...parsed.mapBy('schedules'));

  return { exceptions, schedules };
}

export default {};
