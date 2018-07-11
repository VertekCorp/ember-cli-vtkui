import Component from '@ember/component';
import EmberObject from '@ember/object';
import { observer, set } from '@ember/object';
import { debounce } from '@ember/runloop';
import { A } from '@ember/array';
import layout from '../templates/components/g-grid';

export default Component.extend({
  layout,
  tagName: 'table',
  classNames: ['g-grid'],
  attributeBindings: ['cellspacing'],
  cellspacing: 0,

  init() {
    this._super(...arguments);
    this.setProperties({
      headings: A([]),
      children: A([]),
      allSelected: false
    });
  },

  registerChild(child) {
    if (this.get('onDoubleClick') && !child.get('selector') && !child.get('dragHandle')) {
      set(child, 'onDoubleClick', this.get('onDoubleClick'));
    }

    debounce(this, function() {
      let headings = this.get('headings');
      let heading = child.get('heading');
      if (!headings.findBy('text', heading)) {
        headings.pushObject(EmberObject.create({
          text: heading,
          sortPath: child.get('sortPath') || '',
          isSelector: child.get('selector'),
          dragHandle: child.get('dragHandle')
        }));
      }
      this.get('children').pushObject(child);
    }, 150);
  },

  unregisterChild(child) {
    this.get('children').removeObject(child);
  },

  allSelectedDidChange: observer('allSelected', function() {
    // let selection = this.get('selection');
    this.get('children').forEach((c) => {
      if (c.get('selector') && !c.get('disabled')) {
        c.set('_selected', this.get('allSelected'));
      }
    });
    this.updateSelections();
  }),

  updateSelections() {
    let selection = this.get('selection');
    if (selection) {
      selection.clear();
      this.get('children').forEach((c) => {
        if (c.get('selector')) {
          if (c.get('_selected')) {
            selection.pushObject(c.get('row'));
          } else {
            selection.removeObject(c.get('row'));
          }
        }
      });
    }
  },

  actions: {
    reorderItems(rows, draggedRow) {
      this.set('content', rows);
      this.set('content.justDragged', draggedRow);
      this.sendAction('onDragAndDrop', rows, draggedRow);
    }
  }

});
