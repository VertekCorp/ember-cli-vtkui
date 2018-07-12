import Component from '@ember/component';
import { computed, defineProperty } from '@ember/object';
import layout from '../templates/components/g-input';

export default Component.extend({
  layout,
  classNames: ['g-input'],

  id: computed('elementId', function() {
    return `${this.get('elementId')}-g-input`;
  }),

  init() {
    this._super(...arguments);
    let attrs = this.get('attrs');
    if (attrs.model && attrs.path) {
      defineProperty(this, 'validation', computed.oneWay(`model.validations.attrs.${attrs.path}`));
      defineProperty(this, 'value', computed.alias(`model.${attrs.path}`));
    }
  },

  isValid: computed('validation.isValid', function() {
    let validation = this.get('validation');
    return (validation) ? validation.get('isValid') : true;
  })

});
