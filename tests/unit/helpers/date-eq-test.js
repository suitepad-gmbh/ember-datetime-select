/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  dateEq
} from 'ember-datetime-select/helpers/date-eq';

describe('DateEqHelper', function() {
  it('is a function', function() {
    expect(dateEq).to.be.a('function');
  });
});
