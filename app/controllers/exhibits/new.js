import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    saveExhibit(newExhibit, museum) {

      var controller = this;

      newExhibit.set('museum', museum);
      museum.get('exhibits').addObject(newExhibit);

      newExhibit.save().then(function() {
        museum.save().then(function() {
          controller.transitionToRoute('exhibits');
        })
      });

    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});

//
// var post = this.get('post');
// post.get('comments').addObject(newComment);
//
// // Save the comment, then save the post
// newComment.save().then(function() {
//   return post.save();
// });
