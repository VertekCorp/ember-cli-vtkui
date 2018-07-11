import startApp from '../../helpers/start-app';
import { module, test, andThen, click, visit } from 'qunit';
import { run } from '@ember/runloop';
import $ from 'jquery';

let App;

module('Acceptance - Modal', {
  setup() {
    App = startApp();
  },
  teardown() {
    run(App, 'destroy');
  }
});

test('Modal opens when button is clicked', assert => {
  visit('/modals');

  andThen(function() {
    assert.equal($('.ember-modal-dialog').length, 0, 'Modal is not present');
    click('.g-button');

    andThen(function() {
      assert.equal($('.ember-modal-dialog').length, 1, 'Modal is present');
    });
  });
});
