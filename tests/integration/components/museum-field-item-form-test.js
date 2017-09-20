import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('museum-field-item-form', 'Integration | Component | museum field item form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{museum-field-item-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#museum-field-item-form}}
      template block text
    {{/museum-field-item-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
