/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import dates from 'ember-datetime-select/utils/dates';
import later from 'later';

const start = new Date(Date.parse('2016-01-01T00:00:00Z'));
const end   = new Date(Date.parse('2016-01-07T00:00:00Z'));

describe('dates', function() {
  it('is a function', function() {
    expect(dates).to.be.a('function');
  });

  it('returns an array', function() {
    expect(dates()).to.be.an('array');
  });

  it('returns only one element per day', function() {
    let schedule = later.parse.cron('* * * * *');
    let result = dates(start, end, schedule);
    expect(result.length).to.eql(7);
  });
});
