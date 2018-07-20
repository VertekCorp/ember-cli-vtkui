import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | g-date', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('model', EmberObject.create({ bday: '01/15/1974' }));
    await render(hbs`{{g-date model=model path="bday"}}`);
    assert.equal(find('input').value.trim(), '01/15/1974');
  });
});
