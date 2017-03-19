import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  location: config.locationType,
  rootURL: config.rootURL
});