import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

moduleForComponent('g-input', 'Integration | Component | g input', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', EmberObject.create({ name: 'Qunit' }));
  this.render(hbs`{{g-input model=model path="name"}}`);
  assert.equal(this.$('input').val().trim(), 'Qunit');
});
