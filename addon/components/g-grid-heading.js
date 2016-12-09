import Ember from 'ember';
import layout from '../templates/components/g-grid-heading';
import Grid from './g-grid';
const { Component, computed, isPresent } = Ember;

export default Component.extend({
  layout,
  tagName: 'th',
  isSortAsc: true,
  isSelector: false,
  'string-filter': false,
  'date-filter': false,
  sortDir: computed('isSortAsc', function() {
    return this.get('isSortAsc') ? 'ASC' : 'DESC';
  }),
  isSorted: computed('sortPath', 'sortField', function() {
    return (isPresent(this.get('sortPath')) && (this.get('sortField') === this.get('sortPath')));
  }),
  isFiltered: computed('string-filter', 'date-filter', function() {
    return (this.get('string-filter') || this.get('date-filter'));
  }),

  _getParent() {
    return this.nearestOfType(Grid);
  },

  click(e) {
    console.log(e.target);
    const target = Ember.$(e.target);
    if (target.hasClass('filter-indicator') || target.hasClass('g-input-field')) {
      return;
    }

    let sortPath = this.get('sortPath');
    if (sortPath) {
      let parent = this._getParent();
      this.toggleProperty('isSortAsc');
      if (parent) {
        parent.setProperties({
          sortField: sortPath,
          sortDir: this.get('sortDir')
        });
        parent.updateSelections();
      }
    }

  },

  actions: {
    queryChanged(query) {
      this.sendAction('onFilter', this.get('queryParam'), query);
    },
    toggleFilter() {
      console.log('heard toggleFilter');
    }
  }
});
