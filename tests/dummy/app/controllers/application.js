import Ember from 'ember';

export default Ember.Controller.extend({
  init(...args) {
    this._super(...args);
    this.set('current1', new Date(Date.parse('2016-01-05T00:00:00Z')));
  },

  start: Ember.computed(function() {
    return new Date(Date.parse('2016-01-01T00:00:00Z'));
  }),

  end: Ember.computed(function() {
    return new Date(Date.parse('2016-01-07T00:00:00Z'));
  })
});
