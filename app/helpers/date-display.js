import Ember from 'ember';
import moment from 'moment';

export function dateDisplay(params) {
  var timestamp = params[0];
  var date = moment(timestamp).format("MM/DD/YYYY");
  return date;
}

export default Ember.Helper.helper(dateDisplay);
