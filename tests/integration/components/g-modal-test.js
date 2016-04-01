import startApp from '../../helpers/start-app';
import { module, test } from 'qunit';
import Ember from 'ember';

let App;

module('Acceptance - Modal', {
  setup() {
    App = startApp();
  },
  teardown() {
    Ember.run(App, 'destroy');
  }
});

test('Modal opens when button is clicked', assert => {
  visit('/modals');

  andThen(function() {
    assert.equal(Ember.$('.ember-modal-dialog').length, 0, 'Modal is not present');
    click('.g-button');

    andThen(function() {
      assert.equal(Ember.$('.ember-modal-dialog').length, 1, 'Modal is present');
    });
  });
});
