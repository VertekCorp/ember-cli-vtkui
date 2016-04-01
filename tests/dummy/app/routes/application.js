import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModal() {
      this.controllerFor('application').set('showModal', false);
    }
  }
});
