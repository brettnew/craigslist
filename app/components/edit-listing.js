import Ember from 'ember';

export default Ember.Component.extend({

  editListing: false,
  actions: {
    editListingShow() {
      this.set('editListing', true);
    },
    edit(listing) {
      var params = {
        category: this.get('category'),
        title: this.get('title'),
        detail: this.get('detail'),
        username: this.get('username'),
        image: this.get('image')
      };
      this.set('editListing', false);
      this.sendAction('edit', listing, params);
    }
  }
});
