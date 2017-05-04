import Ember from 'ember';
import layout from '../templates/components/g-grid-filter';

export default Ember.Component.extend({
  layout,
  classNames: ['filter-wrapper'],
  filterExpanded: false,

  visibilityClass: Ember.computed('filterExpanded', function() {
    return this.get('filterExpanded') ? '' : 'hidden';
  }),

  didInsertElement() {
    this._super(...arguments);
    const component = this;
    const element = this.$();
    Ember.$('body').on('click', function(e) {
      if (!element.is(e.target) && element.find(e.target).length === 0) {
        component.set('filterExpanded', false);
      }
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    Ember.$('body').off('click');
  },

  click(e) {
    const target = Ember.$(e.target);
    if (target.hasClass('filter-indicator')) {
      this.toggleProperty('filterExpanded');
    }
  },

  actions: {
    queryChanged(query) {
      this.sendAction('onChange', this.get('queryParam'), query);
      this.set('filterExpanded', false);
    }
  }
});
