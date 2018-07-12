import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/g-paginator';

export default Component.extend({
  layout,
  classNames: ['g-paginator'],

  offset: 0,
  limit: 0,
  total: 0,

  start: computed('offset', 'total', function() {
    let total = this.get('total');
    let offset = this.get('offset');
    return (total > 0) ? Number(offset) + 1 : total;
  }),

  end: computed('offset', 'limit', 'total', function() {
    let total = this.get('total');
    let offset = this.get('offset');
    let limit = this.get('limit');
    let sum = Number(offset) + Number(limit);
    if (sum > total || total === 0) { return total; }
    return Number(offset) + Number(limit);
  }),

  _hasPrevious: computed('offset', function() {
    return Number(this.get('offset')) !== 0;
  }),

  _previousDisabled: computed('_hasPrevious', function() {
    return !this.get('_hasPrevious');
  }),

  _hasNext: computed('offset', 'limit', 'total', function() {
    let sum = Number(this.get('offset')) + Number(this.get('limit'));
    let total = Number(this.get('total'));
    return total > sum;
  }),

  _nextDisabled: computed('_hasNext', function() {
    return !this.get('_hasNext');
  }),

  actions: {
    next() {
      if (this.get('_hasNext')) {
        let nextOffset = Number(this.get('offset')) + Number(this.get('limit'));
        this.set('offset', nextOffset);
      }
    },
    previous() {
      if (this.get('_hasPrevious')) {
        let previousOffset = Number(this.get('offset')) - Number(this.get('limit'));
        this.set('offset', previousOffset);
      }
    }
  }

});
