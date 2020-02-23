import { Template } from 'meteor/templating';
import { Stuff, QScenarios } from '../../api/qs/collections.js'; 

Template.List_QS_Page.helpers({

  /**
   * @returns {*} All of the QSs.
   */
  qsList() {
    return QScenarios.find();
  },
  not_empty_qsList() {
    return QScenarios.find().count() > 0;
  },
});
