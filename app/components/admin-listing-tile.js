import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['timestamp:desc'],
  sortedListings: Ember.computed.sort('listings', 'sortBy'),

  actions: {
    delete(listing) {
      this.sendAction('destroyListing', listing);
    }
  }
});
