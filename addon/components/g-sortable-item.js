import { computed } from '@ember/object';
import SortableItem from 'ember-sortable/components/sortable-item';
import layout from 'ember-sortable/templates/components/sortable-item';

export default SortableItem.extend({
  layout,
  classNameBindings: ['isOdd:tr-odd:tr-even', 'isDragging', 'isDropping'],
  isOdd: computed('rowIndex', function() {
    return (this.get('rowIndex') % 2 === 0);
  })
});
