import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
 actions:{
  // exhibitFieldSave(param){
  //  this.sendAction('action', param);
  // }


   exhibitFieldSave(newExhibitFields,exhibit) {

     var controller = this;
     newExhibitFields.set('exhibit',exhibit);
     console.log()
     newExhibitFields.save().then(()=> {
       exhibit.save().then(()=>{
        controller.set('item',null);
       })
     });

   }
 }
});
