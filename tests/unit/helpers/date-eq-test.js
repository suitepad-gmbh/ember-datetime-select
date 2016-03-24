/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  dateEq
} from 'ember-datetime-select/helpers/date-eq';

const date1 = new Date(Date.parse('2016-01-01T15:00:00Z'));
const date2 = new Date(Date.parse('2016-01-01T18:00:00Z'));
const date3 = new Date(Date.parse('2016-01-07T18:00:00Z'));

describe('DateEqHelper', function() {
  it('is a function', function() {
    expect(dateEq).to.be.a('function');
  });

  it('is false if one param is not a date', function() {
    expect(dateEq([new Date(), null])).to.be.false;
  });

  it('is false if both params is not a date', function() {
    expect(dateEq([null, null])).to.be.false;
  });

  it('is true if both params are the same date', function() {
    expect(dateEq([date1, date2])).to.be.true;
  });

  it('is true if both params are different dates', function() {
    expect(dateEq([date2, date3])).to.be.false;
  });
});
