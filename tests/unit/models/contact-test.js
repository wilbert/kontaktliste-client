import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contact', 'Unit | Model | contact', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// test('should return face center x', function(assert) {
//   let model = this.subject({ face_center_x: 66 });
//
//   // Ember.run(function(){
//   //   model.setLeftPosition()
//   // });
//
//   assert.equal(model.left_position, -6);
// });
