import Component from '@ember/component';
import layout from '../templates/components/g-button';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['g-button'],
  attributeBindings: ['disabled'],

  click() {
    this.sendAction('action', this.get('actionArg'));
  }
});
