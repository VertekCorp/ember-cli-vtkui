import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    alertme(arg) {
      this.controllerFor('application').setProperties({
        showModal: true,
        modalTitle: 'Info',
        modalMessage: `You clicked the button with actionArg: ${arg}`
      });
    }
  }
});
