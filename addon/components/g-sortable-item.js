import Ember from 'ember';
import SortableItem from 'ember-sortable/components/sortable-item';
import layout from 'ember-sortable/templates/components/sortable-item';

export default SortableItem.extend({
  layout,
  classNameBindings: ['isOdd:tr-odd:tr-even', 'isDragging', 'isDropping'],
  isOdd: Ember.computed('rowIndex', function() {
    return (this.get('rowIndex') % 2 === 0);
  })
});
