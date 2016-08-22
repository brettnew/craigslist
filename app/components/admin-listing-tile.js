import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return Ember.RSVP.hash({
      listings: this.store.findAll('listing'),
      categories: this.store.findAll('category')
    });
  },

  sortBy: ['timestamp:desc'],
  sortedListings: Ember.computed.sort('listings', 'sortBy'),

  actions: {
    delete(listing) {
      this.sendAction('destroyListing', listing);
    },
    edit(listing, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          listing.set(key, params[key]);
        }
      });
      listing.save();
    }
  }
});
