import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exhibit-field-item', 'Integration | Component | exhibit field item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exhibit-field-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exhibit-field-item}}
      template block text
    {{/exhibit-field-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
