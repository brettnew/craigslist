import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    save1() {
      var params = {
        title: this.get('title'),
        detail: this.get('detail'),
        username: this.get('username'),
        timestamp: Date.now(),
        category: this.get('category'),
        image: this.get('image')
      };
      this.set('addNewListing', false);
      this.sendAction('save2', params);
      this.set('title', "");
      this.set('detail', "");
      this.set('username', "");
      this.set('category', "");
      this.set('image', "");
    }
  }
});
