import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortField', 'sortDir', 'firstName', 'lastName', 'bday', 'bday-comparison'],
  sortField: null,
  sortDir: 'ASC',
  firstName: null,
  lastName: null,
  bday: Ember.A([]),
  'bday-comparison': Ember.A([]),

  actions: {
    clearFilters() {
      this.setProperties({
        sortField: null,
        sortDir: 'ASC',
        firstName: null,
        lastName: null
      });
    }
  }
});
