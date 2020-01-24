module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cp-validations', target: '3.5.6' },
        { name: 'ember-attacher', target: '1.0.2' },
        { name: 'liquid-fire', target: '0.31.0' },
        { name: 'ember-modal-dialog', target: '2.4.3' },
        { name: 'ember-cli-sass', target: '10.0.0' },
        { name: 'ember-sortable', target: '2.1.1' },
        { name: 'ember-concurrency', target: '1.1.3'},
        { name: 'ember-pikaday', target: '2.4.1'},
        { name: "ember-paper", target: "^1.0.0-beta.25"},
        { name: "ember-light-table", target: "git+https://github.com/offirgolan/ember-light-table.git#2-x"},
        { name: "ember-font-awesome", target: "^4.0.0-rc.4"}
      ]
    });
  }
}
