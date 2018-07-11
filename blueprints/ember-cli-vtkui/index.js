module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-selectize', target: '0.5.12' },
        { name: 'ember-cp-validations', target: '3.5.1' },
        { name: 'ember-tooltips', target: '2.9.2' },
        { name: 'liquid-fire', target: '0.29.3' },
        { name: 'ember-modal-dialog', target: '2.4.3' },
        { name: 'ember-cli-sass', target: '5.3.1' },
        { name: 'ember-sortable', target: '1.8.1' },
        { name: 'ember-concurrency', target: '0.8.18'},
        { name: 'ember-pikaday', target: '2.2.2'}
      ]
    });
  }
}
