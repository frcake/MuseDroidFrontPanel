import Ember from 'ember';

export default Ember.Component.extend({
 store: Ember.inject.service(),
  buttonLabel: 'Save',

  actions: {
    buttonClicked(param) {
      this.sendAction('action', param);
    }
  }

});
