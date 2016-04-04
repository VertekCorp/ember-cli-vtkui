import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['isOdd:tr-odd:tr-even'],
  isOdd: Ember.computed('rowIndex', function() {
    return (this.get('rowIndex') % 2 == 0);
  })
});
