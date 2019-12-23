import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { click, visit } from '@ember/test-helpers';

module('Acceptance | components/g date', function(hooks) {
  setupApplicationTest(hooks);

  test('calendar opens when date input is focused', async function(assert) {
    await visit('/inputs');
    let $calendar = document.querySelector('.pika-single');
    assert.notEqual($calendar, undefined, 'calendar is present');
    assert.ok($calendar.classList.contains("is-hidden"), 'calendar is hidden');

    await click('.g-date');
    assert.notEqual($calendar, undefined, 'calendar is present');
    assert.notOk($calendar.classList.contains("is-hidden"), 'calendar is showing');
  });
});
