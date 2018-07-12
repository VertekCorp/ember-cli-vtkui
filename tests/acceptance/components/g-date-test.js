import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { click, visit } from '@ember/test-helpers';
import $ from 'jquery';

module('Acceptance | components/g date', function(hooks) {
  setupApplicationTest(hooks);

  test('calendar opens when date input is focused', async function(assert) {
    await visit('/inputs');
    let $calendar = $('body > .pika-single');
    assert.equal($calendar.length, 1, 'calendar is present');
    assert.ok($calendar.hasClass('is-hidden'), 'calendar is hidden');

    await click('.g-date');
    assert.equal($calendar.length, 1, 'calendar is present');
    assert.notOk($calendar.hasClass('is-hidden'), 'calendar is showing');
  });
});
