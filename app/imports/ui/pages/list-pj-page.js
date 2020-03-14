import { Template } from 'meteor/templating';
import { AProjects } from '../../api/qs/collections.js'; 

Template.List_PJ_Page.helpers({

  /**
   * @returns {*} All of the Projects.
   */
  pjList() {
    var ls=AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    return ls;
  },
  not_empty_pjList() {
    var count=AProjects.find({owner: Meteor.userId()},{sort: {name: 1}}).count();
    return count > 0;
  },
});

Template.List_PJ_Page.events({
  'click .delete': function(event) {
    event.preventDefault();
    AProjects.remove(this._id);
  },
});