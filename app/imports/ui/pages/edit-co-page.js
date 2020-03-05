import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Constraints } from '../../api/qs/collections.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditCOForm: {
    /**
     * After successful form submission, go to List_PJ_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_CO_Page');
    },
  },
});

Template.Edit_CO_Page.helpers({
  getDoc() {
    return Constraints.findOne(FlowRouter.getParam('_id'));
  },
  coCollection() {
    return Constraints; 
  },
});

