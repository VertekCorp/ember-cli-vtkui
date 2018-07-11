import Route from '@ember/routing/route';

export default Route.extend({
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
