/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import times from 'ember-datetime-select/utils/times';
import later from 'later';

const date = new Date(Date.parse('2016-01-01T00:00:00Z'));

describe('times', function() {
  it('is a function', function() {
    expect(times).to.be.a('function');
  });

  it('returns an array', function() {
    expect(times()).to.be.an('array');
  });

  it('returns elements according to the schedule', function() {
    let schedule = later.parse.cron('*/30 10-17 * * *');
    let result = times(date, schedule);
    expect(result.length).to.eql(16);
  });
});
