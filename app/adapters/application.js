import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  // namespace: 'api/v1',
  // host: config.api_server
  host: 'http://127.0.0.1:3000'
});
