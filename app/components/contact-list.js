import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    associate(obj, ops) {
      // obj.set('manager_id', ops.target.managerId);
      // obj.save();
      this.sendAction('action', obj.id, ops.target.managerId);
    }
  }
});
