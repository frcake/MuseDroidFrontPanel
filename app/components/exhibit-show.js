import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  newFields: null,
  actions: {
    createFields() {
     var newFields = this.get('newFields');
      if (newFields == null) {
        let exh = this.get('model');
        this.set('newFields', this.get('store').createRecord('exhibit-field', {
          exhibit: exh
        }));
      }
      else{
       this.set('newFields',null);
      }
    }
  }
});
