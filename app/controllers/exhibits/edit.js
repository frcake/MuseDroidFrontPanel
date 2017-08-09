import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    saveExhibit(newExhibit, museum) {
      exhibit.save().then(() => this.transitionTo('exhibits'));

      var controller = this;

      newExhibit.set('museum', museum);
      museum.get('exhibits').addObject(newExhibit);

      newExhibit.save().then(function() {
        museum.save().then(function() {
          controller.transitionToRoute('exhibits');
        })
      });

    },

    willTransition(transition) {
      let model = this.controller.get('model.exhibit');

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
