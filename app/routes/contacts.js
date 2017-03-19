import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  queryParams: {
    term: { refreshModel: true },
    sort: { refreshModel: true }
  },
  model(params) {
    return this.store.query('contact', { q: { name_or_email_or_postal_address_cont: params.term, s: params.sort } });
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
