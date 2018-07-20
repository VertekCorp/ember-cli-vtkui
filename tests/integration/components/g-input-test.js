import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | g input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('model', EmberObject.create({ name: 'Qunit' }));
    await render(hbs`{{g-input model=model path="name"}}`);
    assert.equal(find('input').value.trim(), 'Qunit');
  });
});
