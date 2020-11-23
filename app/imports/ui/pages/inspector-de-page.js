import { Template } from 'meteor/templating';
import { ArchModels, AProjects } from '../../api/qs/collections.js'; 
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.Inspector_DE_Page.helpers({

  /**
   * @returns {*} All elementos applied to the ArchDecision.
  */ 
   
    

   
  deAppList() {
    return decList;
  },
  
  not_empty_deAppList() {
    return decList.length>0;
  },

  
});




Template.Inspector_DE_Page.onCreated(function () {
  //load view on session
 // var _dname=FlowRouter.getParam('_decname');
 // console.log("_dname");
 decList=[];

 var dname=FlowRouter.getParam('_dname');
	//console.log(dname);
    var pNames=[];
    var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
    projLs.forEach(function(p){
      pNames.push(p.name);
    })
    var models=ArchModels.find({project: {$in: pNames} },{'xml': 1, 'view':1,'name':1});
    models.forEach(function(m){
    	 //console.log(m._id, m.name, m.view);
    	 parser = new DOMParser();
		 xmlDoc = parser.parseFromString(m.xml,"text/xml");
		 var objs = xmlDoc.getElementsByClassName("Deployment");
		 for (let depl of objs) {
		 	if(depl.getAttribute("decisionCode")==dname){
   		 		//console.log(depl);
   		 		decList.push({"idModel":m._id, "dname":dname, "model":m.name, "view_name":m.view, "element_name":depl.getAttribute("label"), "element_type":"Deployment" });
   		 	}
		 }
		 var objs = xmlDoc.getElementsByClassName("Artifact");
		 for (let arti of objs) {
		 	if(arti.getAttribute("decisionCode")==dname){
   		 		//console.log(arti);
   		 		decList.push({"idModel":m._id, "dname":dname, "model":m.name, "view_name":m.view, "element_name":arti.getAttribute("label"), "element_type":"Artifact" });
   		 	}
		 }
		 var objs = xmlDoc.getElementsByClassName("Estimator");
		 for (let esti of objs) {
		 	if(esti.getAttribute("decisionCode")==dname){
   		 		//console.log(esti);
   		 		decList.push({ "idModel":m._id, "dname":dname, "model":m.name, "view_name":m.view, "element_name":esti.getAttribute("label"), "element_type":"Component" });
   		 	}
		 }
		 var objs = xmlDoc.getElementsByClassName("Ingestor");
		 for (let esti of objs) {
		 	if(esti.getAttribute("decisionCode")==dname){
   		 		//console.log(esti);
   		 		decList.push({ "idModel":m._id, "dname":dname, "model":m.name, "view_name":m.view, "element_name":esti.getAttribute("label"), "element_type":"Ingestor" });
   		 	}
		 }
		 var objs = xmlDoc.getElementsByClassName("Sink");
		 for (let esti of objs) {
		 	if(esti.getAttribute("decisionCode")==dname){
   		 		//console.log(esti);
   		 		decList.push({ "idModel":m._id, "dname":dname, "model":m.name, "view_name":m.view, "element_name":esti.getAttribute("label"), "element_type":"Sink" });
   		 	}
		 }
		 //console.log(xmlDoc);
    	 
    	 
    })
});