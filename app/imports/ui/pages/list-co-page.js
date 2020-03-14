import { Template } from 'meteor/templating';
import { Constraints, AProjects } from '../../api/qs/collections.js'; 

Template.List_CO_Page.helpers({

  /**
   * @returns {*} All of the Constraints.
   */
  coList() {
    
    var pNames=[];
    var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    projLs.forEach(function(p){
      pNames.push(p.name);
    })
    var ls=Constraints.find({project: {$in: pNames} });
    //var ls=Constraints.find();
    return ls;
  },
  not_empty_coList() {
    var ids=['p1','A la Luna con Luna']
    return ls=Constraints.find({project: {$in: ids} }).count() > 0;
  },
});

Template.List_CO_Page.events({
  'click .delete': function(event) {
    //console.log("delete:"+this._id);
    event.preventDefault();
    Constraints.remove(this._id);
  },
});