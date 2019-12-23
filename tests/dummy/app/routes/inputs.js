import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { getOwner } from '@ember/application';
import { A } from '@ember/array';
import Person from '../models/person';

export default Route.extend({
  model() {
    return hash({
      person: Person.create(getOwner(this).ownerInjection(), { likesCats: true }),
      robots: A([
        {id: 1, name: 'R2D2'},
        {id: 2, name: 'C3PO'},
        {id: 3, name: 'T3-H8'},
        {id: 4, name: 'BB-8'}
      ]),
      carMakes: A([
        { id: 1, name: 'volvo' },
        { id: 2, name: 'ford' }
      ]),
      carModels: A([
        { id: 1, name: 'xc90', make: 1 },
        { id: 2, name: '240dl', make: 1 },
        { id: 3, name: 'pinto', make: 2 }
      ]),
    });
  },

  setupController(controller, models) {
    controller.setProperties({
      person: models.person,
      robots: models.robots,
      carMakes: models.carMakes,
      carModels: models.carModels,
      selectedModels: A([])
    });
  }
});
