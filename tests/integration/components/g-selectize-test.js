import { setupRenderingTest } from 'ember-qunit';
import { module, skip } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | g selectize', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', function(assert) {
    let model = [{id:"1",name:'one'}, {id:"2",name:'two'}];
    this.set('model', model);

    this.render(hbs`{{g-selectize content=model optionValuePath="content.id" optionLabelPath="content.name"}}`);
    assert.dom('*').hasClass('g-input');
  });
});
