import Ember from 'ember';

export default Ember.Route.extend({
 model(){
  return this.store.findAll('exhibit');
 },

  actions: {

    deleteExhibit(exhibit) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        exhibit.destroyRecord();
      }
    }
  }
});
