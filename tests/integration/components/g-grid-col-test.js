import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { A } from '@ember/array';

moduleForComponent('g-editable-grid-col', 'Integration | Component | g editable grid col', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('model', A([
    { id:1, name: "Bubba" }
  ]));

  // Template block usage:"
  this.render(hbs`
    {{#g-grid content=model as |person|}}
      {{#g-grid-col row=person heading="Name"}}
        {{person.name}}
      {{/g-grid-col}}
    {{/g-grid}}
  `);

  assert.equal(this.$().text().trim(), 'Bubba');
});
