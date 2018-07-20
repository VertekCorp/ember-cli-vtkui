import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { A } from '@ember/array';

module('Integration | Component | g editable grid col', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"
    this.set('model', A([
      { id:1, name: "Bubba" }
    ]));

    // Template block usage:"
    await render(hbs`
      {{#g-grid content=model as |person|}}
        {{#g-grid-col row=person heading="Name"}}
          {{person.name}}
        {{/g-grid-col}}
      {{/g-grid}}
    `);
    assert.equal(this.$().text().trim().split(/[\n\s]+/)[1], 'Bubba');
  });
});
