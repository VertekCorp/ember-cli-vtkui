import Ember from 'ember';
import layout from '../templates/components/string-filter';

export default Ember.Component.extend({
  classNames: ['g-filter'],
  layout,
  query: null,
  queryIsEmpty: Ember.computed('query', function() {
    return Ember.isEmpty(this.get('query'));
  }),
  actions: {
    queryChanged(e) {
      this.sendAction('onChange', e.target.value);
    },
    clearFilter() {
      this.set('query', null);
      this.sendAction('onChange', null);
    }
  }
});
