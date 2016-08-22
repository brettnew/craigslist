import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  detail: DS.attr(),
  username: DS.attr(),
  timestamp: DS.attr(),
  image: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
