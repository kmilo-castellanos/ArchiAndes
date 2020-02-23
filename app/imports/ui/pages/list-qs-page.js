import { Template } from 'meteor/templating';
import { Stuff, QScenarios } from '../../api/stuff/stuff.js';

Template.List_QS_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  qsList() {
    return QScenarios.find();
  },
});
