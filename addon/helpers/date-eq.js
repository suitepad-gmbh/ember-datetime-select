import Ember from 'ember';
import { sameDay } from 'ember-datetime-select/utils/helpers';

export function dateEq([a, b]) {
  if (!a || !b) {
    return false;
  }
  return sameDay(a, b);
}

export default Ember.Helper.helper(dateEq);
