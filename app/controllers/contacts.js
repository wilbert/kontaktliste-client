import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['term', 'sort'],
  filterTerm: '',
  sort: 'name',
  actions: {
    searchContacts(term, sort) {
      this.transitionToRoute('contacts', { queryParams: { term: term, sort: sort } });
    },
    updateContact(contactId, newManagerId) {
      this.store.findRecord('contact', contactId).then(function(contact) {
        contact.set('manager_id', newManagerId);
        contact.save().then(transitionContacts);
      });
    }
  }
});
