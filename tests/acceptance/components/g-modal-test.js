import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { click, visit } from '@ember/test-helpers';

module('Acceptance - Modal', function(hooks) {
  setupApplicationTest(hooks);

  test('Modal opens when button is clicked', async assert => {
    await visit('/modals');
    assert.equal(document.querySelector('.ember-modal-dialog'), null, 'Modal is not present');

    await click('.g-button');
    assert.notEqual(document.querySelector('.ember-modal-dialog'), null, 'Modal is present');
  });
});
