/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  startOfDay,
  endOfDay,
  sameDay,
  sameTime,
  cronSchedule
} from 'ember-datetime-select/utils/helpers';
import later from 'later';

const date1 = new Date(Date.parse('2016-01-01T15:00:00Z'));
const date2 = new Date(Date.parse('2016-01-01T18:00:00Z'));
const date3 = new Date(Date.parse('2016-01-07T18:00:00Z'));
const InvalidDate = new Date('foo').constructor;

describe('helpers', function() {
  describe('#startOfDay', function() {
    it('is a function', function() {
      expect(startOfDay).to.be.a('function');
    });

    it('returns a date with time reset', function() {
      let exp = new Date(Date.parse('2016-01-01T00:00:00Z'));
      expect(startOfDay(date1).toString()).to.eql(exp.toString());
    });

    it('returns an invalid date if param is not a date', function() {
      expect(startOfDay({})).to.be.instanceOf(InvalidDate);
    });
  });

  describe('#endOfDay', function() {
    it('is a function', function() {
      expect(endOfDay).to.be.a('function');
    });

    it('returns a date with end of day', function() {
      let exp = new Date(Date.parse('2016-01-01T23:59:59Z'));
      expect(endOfDay(date1).toString()).to.eql(exp.toString());
    });

    it('returns an invalid date if param is not a date', function() {
      expect(endOfDay({})).to.be.instanceOf(InvalidDate);
    });
  });

  describe('#sameDay', function() {
    it('is a function', function() {
      expect(sameDay).to.be.a('function');
    });

    it('is true for dates on the same day', function() {
      expect(sameDay(date1, date2)).to.be.true;
    });

    it('is false for dates on different days', function() {
      expect(sameDay(date2, date3)).to.be.false;
    });

    it('is false if one param is not a date', function() {
      expect(sameDay(null, date3)).to.be.false;
    });

    it('is false if both params are not a date', function() {
      expect(sameDay(null, null)).to.be.false;
    });
  });

  describe('#sameTime', function() {
    it('is a function', function() {
      expect(sameTime).to.be.a('function');
    });

    it('is true for equal times', function() {
      expect(sameTime(date2, date3)).to.be.true;
    });

    it('is false for different times', function() {
      expect(sameTime(date1, date3)).to.be.false;
    });

    it('is false if one param is not a date', function() {
      expect(sameTime(null, date3)).to.be.false;
    });

    it('is false if both params are not a date', function() {
      expect(sameTime(null, null)).to.be.false;
    });
  });

  describe('#cronSchedule', function() {
    it('is a function', function() {
      expect(cronSchedule).to.be.a('function');
    });

    it('returns an object', function() {
      let schedule = '* * * * *';
      expect(cronSchedule(schedule)).to.be.instanceOf(Object);
    });

    it('creates a multi schedule if array is given', function() {
      let schedule = cronSchedule(['0 0 1 1 *', '0 0 1 2 *']);
      let result = later.schedule(schedule).next(2, date1);
      let exp1 = new Date(Date.parse('2016-02-01T00:00:00Z'));
      let exp2 = new Date(Date.parse('2017-01-01T00:00:00Z'));
      expect(result[0].toString()).to.eql(exp1.toString());
      expect(result[1].toString()).to.eql(exp2.toString());
    });

    it('creates a multi schedule if seperated by semicolon', function() {
      let schedule = cronSchedule('0 0 1 1 * ; 0 0 1 2 *');
      let result = later.schedule(schedule).next(2, date1);
      let exp1 = new Date(Date.parse('2016-02-01T00:00:00Z'));
      let exp2 = new Date(Date.parse('2017-01-01T00:00:00Z'));
      expect(result[0].toString()).to.eql(exp1.toString());
      expect(result[1].toString()).to.eql(exp2.toString());
    });
  });
});
