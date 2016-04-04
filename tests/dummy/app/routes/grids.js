import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.A([
      {id: 1, firstName: 'Joe', middleName: 'G', lastName: 'Dev', bday: '2000-02-29' },
      {id: 2, firstName: 'Jane', middleName: 'Z', lastName: 'Doe', bday: '1974-01-15' },
      {id: 3, firstName: 'Jar', middleName: 'J', lastName: 'Binks', bday: null },
      {id: 4, firstName: 'Luke', middleName: 'M', lastName: 'Skywalker', bday: '1978-07-01' },
      {id: 5, firstName: 'Darth', middleName: 'K', lastName: 'Vader', bday: '1978-06-01' }
    ]);
  },

  queryParams: {
    sortField: { refreshModel: true },
    sortDir: { refreshModel: true }
  },

  actions: {
    alertRow(arg) {
      this.controllerFor('application').setProperties({
        showModal: true,
        modalTitle: 'Info',
        modalMessage: `you doubleclicked: ${JSON.stringify(arg)}`
      });
    },
    onDragAndDrop(itemModels, draggedModel) {
        this.controllerFor('application').setProperties({
          showModal: true,
          modalTitle: 'Info',
          modalMessage: `you dragged: ${JSON.stringify(draggedModel)}
          and the new order of items is: ${JSON.stringify(itemModels)}`
        });
    }
  }
});
