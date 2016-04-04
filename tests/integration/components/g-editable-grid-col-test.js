import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-editable-grid-col', 'Integration | Component | g editable grid col', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{g-editable-grid-col}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#g-editable-grid-col}}
      template block text
    {{/g-editable-grid-col}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
