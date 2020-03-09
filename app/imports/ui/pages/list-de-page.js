import { Template } from 'meteor/templating';
import { ArchDecisions } from '../../api/qs/collections.js'; 

Template.List_DE_Page.helpers({

  /**
   * @returns {*} All of the ArchDecisions.
   */
  deList() {
    var ls=ArchDecisions.find();
    return ls;
  },
  not_empty_deList() {
    return ArchDecisions.find().count() > 0;
  },
});


Template.List_DE_Page.events({
  'click .delete': function(event) {
    event.preventDefault();
    ArchDecisions.remove(this._id);
  },
});