import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-form', 'Integration | Component | search form', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{search-form}}`);
  assert.equal(this.$().find('form.search-form button.btn').text(), 'Search');
});
