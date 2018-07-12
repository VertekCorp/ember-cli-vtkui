import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { click, visit } from '@ember/test-helpers';
import $ from 'jquery';

module('Acceptance - Modal', function(hooks) {
  setupApplicationTest(hooks);

  test('Modal opens when button is clicked', async assert => {
    await visit('/modals');
    assert.equal($('.ember-modal-dialog').length, 0, 'Modal is not present');

    await click('.g-button');
    assert.equal($('.ember-modal-dialog').length, 1, 'Modal is present');
  });
});
