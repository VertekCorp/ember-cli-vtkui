import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | g textarea', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"
    this.set('model', { text: 'my text' });
    await render(hbs`{{g-textarea label="ta" model=model path="text"}}`);
    assert.equal(find('textarea').value.trim(), 'my text');
  });
});
