import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { QScenarios } from '../../api/qs/collections.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddQSForm: {
    /**
     * After successful form submission, go to List_QS_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_QS_Page');
    },
  },
});

Template.Add_QS_Page.helpers({
  qsCollection() {
    return QScenarios;
  },
});
