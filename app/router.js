import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('museums',function(){
   this.route('new');
   this.route('edit', {path: ':museum_id/edit'});
  });
  this.route('exhibits',function(){
   this.route('new');
   this.route('edit', {path: ':exhibit_id/edit'});
  });
});

export default Router;
