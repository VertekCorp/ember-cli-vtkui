import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submit() {
      window.alert("the form is valid: " + this.person.get('validations.isValid'));
    },
    setCarModels(make) {
      this.set('selectedMake', make);
      this.selectedModels.clear();
      this.set('selectedModel', undefined);
      this.carModels.forEach((i) => {
        if (i.make === make.id) {
          this.selectedModels.pushObject(i);
        }
      });
    }
  }
});
