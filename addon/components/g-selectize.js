import { oneWay } from '@ember/object/computed';
import Component from '@ember/component';
import { computed, defineProperty } from '@ember/object';
import layout from '../templates/components/g-selectize';

export default Component.extend({
  layout,
  classNames: ['g-input'],

  classNameBindings: ['isValid::g-selectize-invalid'],

  placeholder: 'Select...',
  id: computed('elementId', function() {
    return `${this.get('elementId')}-g-selectize`;
  }),

  lookupValues: computed('lookups', function() {
    return this.lookups.map(lu => lu.value);
  }),

  init() {
    this._super(...arguments);
    let attrs = this.get('attrs');
    if (attrs.model && attrs.path) {
      defineProperty(this, 'validation', oneWay(`model.validations.attrs.${attrs.path}`));
    }
  },

  isValid: computed('validation.isValid', function() {
    let validation = this.get('validation');
    return (validation) ? validation.get('isValid') : true;
  })
});
