import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectRobot(bot) {
      this.set('selection', bot)
      window.alert('you selected: ' + JSON.stringify(bot));
    }
  }
});
