import Ember from 'ember';
import layout from '../templates/components/g-checkbox';
const { Component, computed } = Ember;

export default Component.extend({
  layout,
  disabled: false,
  classNames: ['g-input'],
  id: computed('elementId', function() {
    return `${this.get('elementId')}-g-input`;
  })
});
