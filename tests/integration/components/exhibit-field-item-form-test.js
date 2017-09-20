import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exhibit-field-item-form', 'Integration | Component | exhibit field item form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exhibit-field-item-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exhibit-field-item-form}}
      template block text
    {{/exhibit-field-item-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
