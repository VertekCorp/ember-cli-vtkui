import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('panels');
  this.route('inputs');
  this.route('buttons');
  this.route('grids');

  this.route('mashup');
});

export default Router;
