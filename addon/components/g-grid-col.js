import Component from '@ember/component';
import layout from '../templates/components/g-grid-col';
import Grid from './g-grid';

export default Component.extend({
  layout,
  tagName: 'td',
  classNameBindings: ['dragHandle:g-grid-col-drag-handle:'],

  selector: false,
  dragHandle: false,
  _selected: false,
  parent: null,

  init() {
    this._super(...arguments);
    this.set('parent', this.nearestOfType(Grid));
    this.get('parent').registerChild(this);
  },

  willDestroyElement() {
    this.get('parent').unregisterChild(this);
  },

  click() {
    if (this.get('selector') && !this.get('disabled')) {
      this.toggleProperty('_selected');
      this.get('parent').updateSelections();
    }
  },

  doubleClick() {
    if (this.get('onDoubleClick')) {
      this.sendAction('onDoubleClick', this.get('row'));
    }
  }
});
