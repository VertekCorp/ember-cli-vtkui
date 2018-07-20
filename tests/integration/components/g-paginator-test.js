import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | g paginator', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"
    await render(hbs`{{g-paginator}}`);
    assert.equal(this.$().text().trim(), '0 - 0 of 0');
  });

  test('it renders with meta', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"
    this.setProperties({ offset: 0, limit: 25, total: 49});
    await render(hbs`{{g-paginator offset=offset limit=limit total=total}}`);
    assert.equal(this.$().text().trim(), '1 - 25 of 49');
  });
});
