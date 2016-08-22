import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      currentCategory: this.store.findRecord('category', params.category_id),
      categories: this.store.findAll('category')
    });
  },

  actions: {
    destroyListing(listing) {
      listing.destroyRecord();
    }
  }
});
