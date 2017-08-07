import { moduleForModel, test } from 'ember-qunit';

moduleForModel('exhibit', 'Unit | Model | exhibit', {
  // Specify the other units that are required for this test.
  needs: ['model:museum']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
