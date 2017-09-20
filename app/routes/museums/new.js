// app/routes/museums/new.js
import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		return this.store.createRecord('museum');
	},

	setupController: function(controller, model) {
		this._super(controller, model);
		controller.set('title', 'Create a new museum');
		controller.set('buttonLabel', 'Create');
	},

	renderTemplate() {
		this.render('museums/form');
	},

	actions: {
		saveMuseum(newMuseum) {
			newMuseum.save().then(() => this.transitionTo('museums'));
		},

		willTransition() {
			let model = this.controller.get('model');

			if (model.get('isNew')) {
				model.destroyRecord();
			}
		}
	}
});
