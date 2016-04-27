module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-selectize', target: '0.5.2' },
        { name: 'ember-cp-validations', target: '2.5.0' },
        { name: 'ember-tooltips', target: '0.5.8' },
        { name: 'liquid-fire', target: '0.23.0' },
        { name: 'ember-modal-dialog', target: '0.8.3' },
        { name: 'ember-cli-sass', target: '5.3.1' },
        { name: 'ember-sortable', target: '1.8.1' },
        { name: 'ember-concurrency', target: '0.6.1'}
      ]
    });
  }
}
