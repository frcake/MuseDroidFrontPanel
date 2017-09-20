import DS from 'ember-data';

export default DS.Model.extend({
	language: DS.attr('string'),
	description: DS.attr('string'),
	name: DS.attr('string'),
	museum: DS.belongsTo('museum', { async: true }),

});
