import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | g panel', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    await render(hbs`{{g-panel}}`);

    assert.dom('*').hasText('');

    // Template block usage:"
    await render(hbs`
      {{#g-panel}}
        template block text
      {{/g-panel}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
