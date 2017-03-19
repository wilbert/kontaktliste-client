import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  phone: DS.attr(),
  mobile: DS.attr(),
  gender: DS.attr(),
  avatar: DS.attr(),
  country: DS.attr(),
  zipcode_city: DS.attr(),
  postal_address: DS.attr(),
  children: DS.hasMany('contact', { inverse: 'parent' }),
  parent: DS.belongsTo('contact', { inverse: 'children' })
});
