import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/g-checkbox';

export default Component.extend({
  layout,
  disabled: false,
  classNames: ['g-input'],
  id: computed('elementId', function() {
    return `${this.get('elementId')}-g-input`;
  })
});
