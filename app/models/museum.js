import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  lat: DS.attr('string'),
  lon: DS.attr('string'),
  name: DS.attr('string'),
  exhibits: DS.hasMany('exhibit',{async: true}),
  isValid: Ember.computed.notEmpty('name'),
});
