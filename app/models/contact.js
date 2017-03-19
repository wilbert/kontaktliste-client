import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  mobile: DS.attr(),
  gender: DS.attr(),
  avatar: DS.attr()
});
