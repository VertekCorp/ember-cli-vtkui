import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.A([
      Ember.Object.create({id: 1, firstName: 'Joe', lastName: 'Dev', bday: '2000-02-29' }),
      Ember.Object.create({id: 2, firstName: 'Jane', lastName: 'Doe', bday: '1974-01-15' }),
      Ember.Object.create({id: 3, firstName: 'Jar', lastName: 'Binks', bday: null }),
      Ember.Object.create({id: 4, firstName: 'Luke', lastName: 'Skywalker', bday: '1978-07-01' }),
      Ember.Object.create({id: 5, firstName: 'Darth', lastName: 'Vader', bday: '1978-06-01' })
    ]);
  },

  queryParams: {
    sortField: { refreshModel: true },
    sortDir: { refreshModel: true }
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('selectedPeople', Ember.A([]));
  },

  actions: {
    doDnd(rows, draggedRow) {
      this.controllerFor('application').setProperties({
        showModal: true,
        modalTitle: 'Info',
        modalMessage: `You dragged: ${draggedRow.get('firstName')} ${draggedRow.get('lastName')}.
        <br/><br/>
        The new order of items is: ${JSON.stringify(rows)}`
      });
    },
    doDblClick(row) {
      this.controllerFor('application').setProperties({
        showModal: true,
        modalTitle: 'Info',
        modalMessage: `You double-clicked: ${row.get('firstName')} ${row.get('lastName')}`
      });
    }
  }

});
