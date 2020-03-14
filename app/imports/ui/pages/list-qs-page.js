import { Template } from 'meteor/templating';
import { QScenarios,AProjects } from '../../api/qs/collections.js'; 

Template.List_QS_Page.helpers({

  /**
   * @returns {*} All of the QSs.
   */
  qsList() {
    var pNames=[];
    var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    projLs.forEach(function(p){
      pNames.push(p.name);
    })
    //console.log(pNames);
    var ls=QScenarios.find({project: {$in: pNames} });
    return ls;
  },
  not_empty_qsList() {
    var pNames=[];
    var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    projLs.forEach(function(p){
      pNames.push(p.name);
    })
    return QScenarios.find({project: {$in: pNames} }).count() > 0;
  },
});


Template.List_QS_Page.events({
  'click .delete': function(event) {
    event.preventDefault();
    QScenarios.remove(this._id);
  },
});