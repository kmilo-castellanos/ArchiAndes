import { Template } from 'meteor/templating';
import { ArchModels, AProjects } from '../../api/qs/collections.js'; 

Template.List_MO_Page.helpers({

  /**
   * @returns {*} All of the Constraints.
   */
  moList() {
    
    var pNames=[];
    var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    projLs.forEach(function(p){
      pNames.push(p.name);
    })
    var ls=ArchModels.find({project: {$in: pNames} });
    //var ls=Constraints.find();
    return ls;
  },
  not_empty_moList() {
    var pNames=[];
    var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    projLs.forEach(function(p){
      pNames.push(p.name);
    })
    return ArchModels.find({project: {$in: pNames} }).count() > 0;
  },
});

Template.List_MO_Page.events({
  'click .delete': function(event) {
    event.preventDefault();
    ArchModels.remove(this._id);
  },
});