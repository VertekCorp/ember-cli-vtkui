module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-selectize', target: '0.5.12' },
        { name: 'ember-cp-validations', target: '3.5.6' },
        { name: 'ember-attacher', target: '1.0.2' },
        { name: 'liquid-fire', target: '0.31.0' },
        { name: 'ember-modal-dialog', target: '2.4.3' },
        { name: 'ember-cli-sass', target: '10.0.0' },
        { name: 'ember-sortable', target: '2.1.1' },
        { name: 'ember-concurrency', target: '1.1.3'},
        { name: 'ember-pikaday', target: '2.4.1'},
        { name: 'ember-power-select', target: '^4.0.0-beta.4'}
      ]
    });
  }
}
