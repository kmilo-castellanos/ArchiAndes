import { Template } from 'meteor/templating';
import { ArchDecisions,QScenarios,AProjects } from '../../api/qs/collections.js'; 

Template.List_DE_Page.helpers({

  /**
   * @returns {*} All of the ArchDecisions.
   */
  deList() {

    var pNames=[];
    var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    projLs.forEach(function(p){
      pNames.push(p.name);
    })
    var qsLs=QScenarios.find({project: {$in: pNames} });
    var qsNames=[];
    qsLs.forEach(function(q){
      qsNames.push(q.name);
    })

    var ls=ArchDecisions.find({qs_name: {$in: qsNames} });
    return ls;
  },
  not_empty_deList() {
    var pNames=[];
    var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    projLs.forEach(function(p){
      pNames.push(p.name);
    })
    var qsLs=QScenarios.find({project: {$in: pNames} });
    var qsNames=[];
    qsLs.forEach(function(q){
      qsNames.push(q.name);
    })

    var ls=ArchDecisions.find({qs_name: {$in: qsNames} });
    return ls.count()>0;
  },
});


Template.List_DE_Page.events({
  'click .delete': function(event) {
    event.preventDefault();
    ArchDecisions.remove(this._id);
  },
});