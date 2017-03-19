import DS from 'ember-data';
import config from '../config/environment';

const { String: { pluralize, underscore } } = Ember;

// export default DS.JSONAPIAdapter.extend({
//   host: config.api_server,
//   pathForType(type) {
//     return pluralize(underscore(type));
//   }
// });

export default DS.RESTAdapter.extend({
  host: config.api_server,
});

// export default DS.ActiveModelAdapter.extend({
//   host: config.api_server
// });
