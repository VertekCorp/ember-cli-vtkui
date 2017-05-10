import Ember from 'ember';
import layout from '../templates/components/g-modal';

export default Ember.Component.extend({
  layout,
  renderInPlace: true,
  actions: {
    closeModal() {
      this.sendAction('closeAction');
    }
  }
});
