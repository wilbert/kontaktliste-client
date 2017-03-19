import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['term', 'sort'],
  filterTerm: '',
  sort: '',
  actions: {
    searchContacts(term, sort) {
      this.transitionToRoute('contacts', { queryParams: { term: term, sort: sort } });
    }
  }
});
