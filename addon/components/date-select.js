import Ember from 'ember';
import layout from '../templates/components/date-select';
import dates from 'ember-datetime-select/utils/dates';
import { cronSchedule } from 'ember-datetime-select/utils/helpers';

export default Ember.Component.extend({
  layout,

  // HTML
  tagName: 'select',

  // Properties
  withEmpty: null,
  start: null,
  end: null,
  cron: '0 0 * * *',
  format: 'YYYY-MM-DD',
  value: null,

  // Computed
  dates: Ember.computed('start', 'end', 'cron', function() {
    let start = this.get('start') || new Date();
    let end   = this.get('end')   || new Date(new Date().getTime() + (3600000 * 24));
    let cron  = this.get('cron')  || '0 0 * * *';
    let schedule = cronSchedule(cron);
    return dates(start, end, schedule);
  }),

  // Events
  change() {
    let value = this.$().val();
    if (Ember.isEmpty(value)) {
      this.set('value', null);
    } else {
      this.set('value', new Date(Date.parse(value)));
    }
    this.sendAction('action', this.get('value'));
  }
});
