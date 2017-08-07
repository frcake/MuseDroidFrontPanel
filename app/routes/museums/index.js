import Ember from 'ember';

export default Ember.Route.extend({
 model(){
  return this.store.findAll('museum');
 },

  actions: {

    deleteMuseum(museum) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        museum.destroyRecord();
      }
    }
  }
});
