import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
  model() {
    return A([
      {id: 1, name: 'R2D2'},
      {id: 2, name: 'C3PO'},
      {id: 3, name: 'T3-H8'},
      {id: 4, name: 'BB-8'}
    ]);
  },

  actions: {
    selectRobot(bot) {
      window.alert('you selected: ' + JSON.stringify(bot));
    }
  }
});
