import Ember from 'ember';
import layout from '../templates/components/time-select';
import times from 'ember-datetime-select/utils/times';
import { cronSchedule } from 'ember-datetime-select/utils/helpers';

export default Ember.Component.extend({
  layout,

  // HTML
  tagName: 'select',
  disabled: Ember.computed.empty('date'),

  // Properties
  withEmpty: null,
  date: null,
  cron: '*/15 8-16 * * *',
  format: 'HH:mm',
  value: null,

  // Computed
  times: Ember.computed('date', 'cron', function() {
    let date = this.get('date') || new Date();
    let cron = this.get('cron')  || '*/15 8-16 * * *';
    let schedule = cronSchedule(cron);
    return times(date, schedule);
  }),

  // Observer
  dateChanged: Ember.observer('date', function() {
    let date = this.get('date');
    let value = this.get('value');
    if (date && value) {
      date.setHours(value.getHours());
      date.setMinutes(value.getMinutes());
      console.log(date);
      Ember.run.next(() => {
        this.set('value', date);
      });
    }
  }),

  // Events
  didInsertElement(...args) {
    this._super(...args);
    Ember.run.scheduleOnce('afterRender', () => {
      this.change();
    });
  },

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
