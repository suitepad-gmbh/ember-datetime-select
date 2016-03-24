/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'date-select',
  'Integration: DateSelectComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      this.render(hbs`{{date-select}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
