import { Template } from 'meteor/templating';
import { QScenarios } from '../../api/qs/collections.js'; 

Template.List_QS_Page.helpers({

  /**
   * @returns {*} All of the QSs.
   */
  qsList() {
    var ls=QScenarios.find();
    return ls;
  },
  not_empty_qsList() {
    return QScenarios.find().count() > 0;
  },
});


Template.List_QS_Page.events({
  'click .delete': function(event) {
    event.preventDefault();
    QScenarios.remove(this._id);
  },
});