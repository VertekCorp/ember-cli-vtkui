import Ember from 'ember';
import layout from '../templates/components/date-filter';

export default Ember.Component.extend({
  classNames: ['g-filter'],
  layout,
  query: null,
  actions: {
    queryChanged() {
      this.get('targetObject').set(this.get('queryParam'), this.get('value'));
    }
  }
});
