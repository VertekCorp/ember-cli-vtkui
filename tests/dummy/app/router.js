import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('panels');
  this.route('tab-panels', { path: '/tab-panels' }, function() {
      this.route('tab2');
      this.route('tab3');
      this.route('tab4');
  });
  this.route('inputs');
  this.route('combos');
  this.route('buttons');
  this.route('grids');
  this.route('paginator');
  this.route('modals');
});

export default Router;
