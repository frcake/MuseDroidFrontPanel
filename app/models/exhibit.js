import DS from 'ember-data';
import Ember from 'ember';
export default DS.Model.extend({
  description: DS.attr('string'),
  name: DS.attr('string'),
  museum: DS.belongsTo('museum', {
    async: true,
    inverse: null
  }),
  isValid: Ember.computed.notEmpty('name')
});
