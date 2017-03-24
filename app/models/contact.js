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
  manager_id: DS.attr(),
  face_center_x: DS.attr(),
  face_center_y: DS.attr(),
  children: DS.hasMany('contact', { inverse: 'parent' }),
  parent: DS.belongsTo('contact', { inverse: 'children' }),
  left_position: function() {
    var face_center_x = this.get('face_center_x');
    var left;

    if (face_center_x) {
      var new_center = (face_center_x*100)/150; // image was resised to 100px, but face detection used 150px original image;

      left = ((50 - new_center) * -1);

      return left;
    }

    return 0;
  }.property('face_center_x')
});
