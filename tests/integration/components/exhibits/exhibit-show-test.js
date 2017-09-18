import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exhibits/exhibit-show', 'Integration | Component | exhibits/exhibit show', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exhibits/exhibit-show}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exhibits/exhibit-show}}
      template block text
    {{/exhibits/exhibit-show}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
