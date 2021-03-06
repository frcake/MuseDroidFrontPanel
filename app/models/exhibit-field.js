import DS from 'ember-data';

export default DS.Model.extend({
	language: DS.attr('string'),
	description: DS.attr('string'),
	shortDescription: DS.attr('string'),
	name: DS.attr('string'),
	exhibit: DS.belongsTo('exhibit', { async: true }),
});
