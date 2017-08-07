// app/routes/libraries/edit.js
import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('exhibit', params.exhibit_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit exhibit');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('exhibits/form');
  },

  actions: {

    saveExhibit(exhibit) {
      exhibit.save().then(() => this.transitionTo('exhibits'));
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
