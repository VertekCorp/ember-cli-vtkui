import startApp from '../../helpers/start-app';
import { module, test, andThen, click, visit } from 'qunit';
import { run } from '@ember/runloop';
import $ from 'jquery';

let App;

module('Acceptance - Date', {
  setup() {
    App = startApp();
  },
  teardown() {
    run(App, 'destroy');
  }
});

test('calendar opens when date input is focused', assert => {
  visit('/inputs');

  andThen(function() {
    let $calendar = $('body > .pika-single');
    assert.equal($calendar.length, 1, 'calendar is present');
    assert.ok($calendar.hasClass('is-hidden'), 'calendar is hidden');

    click('.g-date');

    andThen(function() {
      let $calendar = $('body > .pika-single');
      assert.equal($calendar.length, 1, 'calendar is present');
      assert.notOk($calendar.hasClass('is-hidden'), 'calendar is showing');
    });
  });
});
