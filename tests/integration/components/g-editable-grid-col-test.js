import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('g-editable-grid-col', 'Integration | Component | g editable grid col', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('model', Ember.A([
    { id:1, name: "Bubba" }
  ]));

  // Template block usage:"
  this.render(hbs`
    {{#g-editable-grid content=model as |person|}}
      {{#g-editable-grid-col row=person heading="Name"}}
        {{person.name}}
      {{/g-editable-grid-col}}
    {{/g-editable-grid}}
  `);

  assert.equal(this.$().text().trim(), 'Bubba');
});
