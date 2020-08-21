import { Template } from 'meteor/templating';
import { ArchModels, AProjects } from '../../api/qs/collections.js'; 

Template.List_MO_Page.helpers({

  /**
   * @returns {*} All of the Constraints.
   */
  moList() {
    
    var pNames=[];
    var vname= Session.get('sview');
    var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    projLs.forEach(function(p){
      pNames.push(p.name);
    })
    var ls=ArchModels.find({project: {$in: pNames}, view:vname });
    //var ls=Constraints.find();
    return ls;
  },
  not_empty_moList() {
    var pNames=[];
    var vname= Session.get('sview');
    var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    projLs.forEach(function(p){
      pNames.push(p.name);
    })
    return ArchModels.find({project: {$in: pNames} , view:vname}).count() > 0;
  },
  get_view(){
    return Session.get('sview');
    ;
  }  
});


Template.List_MO_Page.events({
  'click .delete': function(event) {
    event.preventDefault();
    ArchModels.remove(this._id);
  },
  'click .add'() {
    FlowRouter.go("/add-mo/");
  },
});


Template.List_MO_Page.onCreated(function () {
  //load view on session
  var vname=FlowRouter.getParam('_vname');
  Session.set('sview', vname);
  console.log(vname);
});