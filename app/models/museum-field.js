import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  name: DS.attr('string'),
  museum: DS.belongsTo('museum', {
    async: true
  }),
  language: DS.attr('string')
});
