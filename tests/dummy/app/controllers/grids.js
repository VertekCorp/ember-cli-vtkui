import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortField', 'sortDir', 'firstName', 'lastName'],
  sortField: null,
  sortDir: 'ASC',
  firstName: null,
  lastName: null
});
