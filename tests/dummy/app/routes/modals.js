import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleModal() {
      this.controllerFor('modals').toggleProperty('showModal');
    }
  }
});
