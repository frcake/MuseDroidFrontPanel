// app/routes/libraries/edit.js
import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('museum', params.museum_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit museum');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('museums/form');
  },

  actions: {

    saveMuseum(museum) {
      museum.save().then(() => this.transitionTo('museums'));
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
