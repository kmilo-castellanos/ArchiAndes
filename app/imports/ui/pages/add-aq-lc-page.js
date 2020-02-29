import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { AQScenarios } from '../../api/qs/collections.js';


/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddAQForm: {
    /**
     * After successful form submission, go to List_PJ_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_QS_Page');
    },
  },
});

Template.Add_AQ_LC_Page.helpers({

  aqCollection() {
    return AQScenarios;
  }
});
