/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'time-select',
  'Integration: TimeSelectComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#time-select}}
      //     template content
      //   {{/time-select}}
      // `);

      this.render(hbs`{{time-select}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
