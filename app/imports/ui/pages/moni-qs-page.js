import { Template } from 'meteor/templating';
import { QScenarios,AProjects } from '../../api/qs/collections.js'; 

Template.Monitor_QS_Page.helpers({

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
  
  grafanaURL() {
  	return "http://172.31.76.235:3000/d/1GXV5joMk/";
  }
  
});


  