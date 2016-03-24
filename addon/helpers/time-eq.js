import Ember from 'ember';
import { sameTime } from 'ember-datetime-select/utils/helpers';

export function timeEq([a, b]) {
  if (!a || !b) {
    return false;
  }
  return sameTime(a, b);
}

export default Ember.Helper.helper(timeEq);
