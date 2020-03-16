import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { ArchDecisions,QScenarios } from '../../api/qs/collections.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddDEForm: {
    /**
     * After successful form submission, go to List_DE_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_DE_Page');
    },
  },
});

Template.Add_DE_Page.helpers({
  deCollection() {
    return ArchDecisions;
  },
  getQSName(){ 
    qsElement=QScenarios.findOne(FlowRouter.getParam('_id'));
    return qsElement.name;
  },
  getSrcForm(){ 
    if(FlowRouter.getParam('_id')!=null){
      return "addDiagramQS";
    }
    return "addDiagram";
  },
  notQSName(){ 
    return FlowRouter.getParam('_id')==null;
  },
});

