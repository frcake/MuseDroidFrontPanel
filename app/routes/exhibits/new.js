// app/routes/exhibits/new.js
import Ember from 'ember';

export default Ember.Route.extend({

  model(){
   return Ember.RSVP.hash({
    exhibit: this.store.createRecord('exhibit'),
    museum: this.store.findAll('museum')
   });
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    // controller.set('exhibit',model.exhibit);
    // controller.set('museum',model.museum)
    controller.set('title', 'Create a new exhibit');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('exhibits/form');
  },

  actions: {

    saveExhibit(newExhibit) {
      newExhibit.save().then(() => this.transitionTo('exhibits'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
