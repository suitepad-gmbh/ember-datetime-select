/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import { timeEq } from 'ember-datetime-select/helpers/time-eq';

const time1 = new Date(Date.parse('2016-01-01T15:00:00Z'));
const time2 = new Date(Date.parse('2016-01-01T18:00:00Z'));
const time3 = new Date(Date.parse('2016-01-07T18:00:00Z'));

describe('TimeEqHelper', function() {
  it('is a function', function() {
    expect(timeEq).to.be.a('function');
  });

  it('is false if one param is not a time', function() {
    expect(timeEq([new Date(), null])).to.be.false;
  });

  it('is false if both params is not a time', function() {
    expect(timeEq([null, null])).to.be.false;
  });

  it('is true if both params are the same time', function() {
    expect(timeEq([time2, time3])).to.be.true;
  });

  it('is true if both params are different times', function() {
    expect(timeEq([time1, time3])).to.be.false;
  });
});
