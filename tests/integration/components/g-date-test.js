import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('g-date', 'Integration | Component | g-date', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', Ember.Object.create({ bday: '01/15/1974' }));
  this.render(hbs`{{g-date model=model path="bday"}}`);
  assert.equal(this.$('input').val().trim(), '01/15/1974');
});
