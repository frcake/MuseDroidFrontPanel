import DS from 'ember-data';
import Ember from 'ember';
export default DS.Model.extend({
	lat: DS.attr('string'),
	lon: DS.attr('string'),
	name: DS.attr('string'),
	placeId: DS.attr('string'),
	exhibits: DS.hasMany('exhibit', {
		async: true,
		inverse: null
	}),
	isValid: Ember.computed.notEmpty('name'),
	fields: DS.hasMany('museum-field', { async: true })
});
