import Component from '@ember/component';
import layout from '../templates/components/g-modal';

export default Component.extend({
  layout,
  renderInPlace: false,
  actions: {
    closeModal() {
      this.sendAction('closeAction');
    }
  }
});
