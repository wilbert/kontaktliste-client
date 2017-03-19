import DS from 'ember-data';

const { String: { singularize, capitalize, underscore } } = Ember;

// export default DS.JSONAPISerializer.extend({
//   payloadKeyFromModelName(modelName) {
//     return singularize(capitalize(modelName));
//   }
// });

export default DS.RESTSerializer.extend({
  keyForAttribute: function(attr, method) {
    return Ember.String.underscore(attr);
  }
});

// import { ActiveModelSerializer } from 'active-model-adapter';
//
// export default ActiveModelSerializer.extend();
