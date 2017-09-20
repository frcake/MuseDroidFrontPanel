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
   this.route('show',{path: ':museum_id'});
  });
  this.route('exhibits',function(){
    this.route('new');
    this.route('edit', {path: ':exhibit_id/edit'});
    this.route('show',{path: ':exhibit_id'});
  });

  this.route('exhibit', function() {});
});

export default Router;
