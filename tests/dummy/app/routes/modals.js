import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    toggleModal() {
      this.controllerFor('modals').toggleProperty('showModal');
    }
  }
});
