import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { ArchDecisions } from '../../api/qs/collections.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditDEForm: {
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

Template.Edit_DE_Page.helpers({
  getDoc() {
    return ArchDecisions.findOne(FlowRouter.getParam('_id'));
  },
  deCollection() {
    return ArchDecisions; 
  }
});

