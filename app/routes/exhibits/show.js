import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    
      return this.store.findRecord('exhibit',params.exhibit_id,{include: 'exhibit-field'})
     // exhibitFields: this.store.createRecord('exhibit-field')   
  }  
});