import Ember from 'ember';

export default Ember.Component.extend({
  sortOptions: Ember.String.w('name email nationality'),
  sortOption: 'name',
  buttonLabel: 'Search',
  didRender() {
    Ember.$('select').material_select();
  },
  actions: {
    buttonClicked(filterTerm, sort) {
      this.sendAction('action', filterTerm, this.get('sortOption'));
    },
    change(sortOption) {
      this.set('sortOption', sortOption);
    }
  }
});
