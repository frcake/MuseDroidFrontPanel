import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	actions: {
		// exhibitFieldSave(param){
		//  this.sendAction('action', param);
		// }

		newMUseumFieldSave(newMuseumFields, museum) {
			console.log(museum);
			var controller = this;
			newMuseumFields.set('museum', museum);
			newMuseumFields.save().then(() => {
				museum.save().then(() => {
					controller.set('item', null);
				})
			});

		}
	}
});
