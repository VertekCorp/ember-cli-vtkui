import { oneWay, alias } from '@ember/object/computed';
import Component from '@ember/component';
import { computed, defineProperty } from '@ember/object';
import layout from '../templates/components/g-date';

export default Component.extend({
  layout,
  classNames: ['g-input'],

  init() {
    this._super(...arguments);
    let attrs = this.get('attrs');
    if (attrs.model && attrs.path) {
      defineProperty(this, 'validation', oneWay(`model.validations.attrs.${attrs.path}`));
      defineProperty(this, 'value', alias(`model.${attrs.path}`));
    }
  },

  isValid: computed('validation.isValid', function() {
    let validation = this.get('validation');
    return (validation) ? validation.get('isValid') : true;
  })

});
