import Ember from 'ember';
import layout from '../templates/components/string-filter';

export default Ember.Component.extend({
  classNames: ['g-filter'],
  layout,
  query: null,
  actions: {
    queryChanged(e) {
      this.sendAction('onChange', e.target.value);
    }
  }
});
