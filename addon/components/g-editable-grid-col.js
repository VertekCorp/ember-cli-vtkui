import Ember from 'ember';
import layout from '../templates/components/g-editable-grid-col';
import Grid from './g-editable-grid';

export default Ember.Component.extend({
  layout,
  tagName: 'td',
  sortPath: null,

  init() {
    this._super(...arguments);
    this._registerWithParent();
  },

  _registerWithParent() {
    let parent = this.nearestOfType(Grid);
    parent.registerChild(this);
  },

  doubleClick() {
    if (this.get('onDoubleClick')) {
      this.sendAction('onDoubleClick', this.get('row'));
    }
  }

});
