/* global require, module */
/* jscs:disable disallowVar, requireEnhancedObjectLiterals */
/* jscs:disable requireTemplateStringsForConcatenation */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },

    // TODO: this is a fix for ember-suave not being compatible with mocha
    // See: https://github.com/dockyard/ember-suave/issues/58
    // Remove when this issue is fixed, also remove the testGenerator function
    // at the end of this file.
    jscsOptions: {
      testGenerator: testGenerator
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};

function testGenerator(relativePath, errors) {
  if (errors) {
    errors = '\\n' + this.escapeErrorString(errors);
  }

  var expectString = relativePath + ' should pass JSCS' + errors;

  return [
    'describe("JSCS - ' + relativePath + '", function () {',
      'it("should pass jscs", function () {',
        'expect(' + !errors + ', "' + expectString + '").to.be.ok;',
      '});',
    '});'
  ].join('\n');
}
