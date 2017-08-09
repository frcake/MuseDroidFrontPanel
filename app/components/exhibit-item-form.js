import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: 'Save',

  actions: {
    buttonClicked(param, param2) {
      this.sendAction('action', param, param2);
    }
  }
});
