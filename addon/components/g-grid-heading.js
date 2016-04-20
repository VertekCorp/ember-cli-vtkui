import Ember from 'ember';
import layout from '../templates/components/g-grid-heading';
import Grid from './g-grid';

export default Ember.Component.extend({
  layout,
  tagName: 'th',
  isSortAsc: true,
  isSelector: false,
  sortDir: Ember.computed('isSortAsc', function() {
    return this.get('isSortAsc') ? 'ASC' : 'DESC';
  }),
  isSorted: Ember.computed('sortPath', 'sortField', function() {
    return (Ember.isPresent(this.get('sortPath')) && (this.get('sortField') === this.get('sortPath')));
  }),

  _getParent() {
    return this.nearestOfType(Grid);
  },

  click() {
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
  }
});
