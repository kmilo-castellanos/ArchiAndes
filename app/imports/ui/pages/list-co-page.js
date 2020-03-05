import { Template } from 'meteor/templating';
import { Constraints } from '../../api/qs/collections.js'; 

Template.List_CO_Page.helpers({

  /**
   * @returns {*} All of the Constraints.
   */
  coList() {
    var ls=Constraints.find();
    return ls;
  },
  not_empty_coList() {
    return Constraints.find().count() > 0;
  },
});
