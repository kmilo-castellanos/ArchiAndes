import { Template } from 'meteor/templating';
import { QScenarios } from '../../api/qs/collections.js'; 

Template.List_QS_Page.helpers({

  /**
   * @returns {*} All of the QSs.
   */
  qsList() {
    var ls=QScenarios.find();
    console.log(ls);
    return ls;
  },
  not_empty_qsList() {
    return QScenarios.find().count() > 0;
  },
});
