import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    Ember.$('select').material_select();
  }
});
