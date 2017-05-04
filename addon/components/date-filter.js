import Ember from 'ember';
import layout from '../templates/components/date-filter';

export default Ember.Component.extend({
  classNames: ['g-filter', 'date-filter'],
  layout,
  query: null,
  actions: {
    queryChanged() {
      this.get('targetObject').set(this.get('queryParam'), this.get('value'));
    }
  },

  beforeValue: null,
  afterValue: null,
  onValue: null,

  filters: Ember.computed('beforeValue', 'afterValue', 'onValue', 'queryParam', function() {
    let before = this.get('beforeValue');
    let after = this.get('afterValue');
    let on = this.get('onValue');
    return Ember.A([
      Ember.Object.create({ label: 'Before', value: before }),
      Ember.Object.create({ label: 'After', value: after }),
      Ember.Object.create({ label: 'On', value: on })
    ]);
  })

});
