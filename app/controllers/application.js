import Sys from '../system/sys';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);

    this.set('sys', new Sys());
  }
})
