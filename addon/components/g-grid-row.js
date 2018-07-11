import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'tr',
  classNameBindings: ['isOdd:tr-odd:tr-even'],
  isOdd: computed('rowIndex', function() {
    return (this.get('rowIndex') % 2 === 0);
  })
});
