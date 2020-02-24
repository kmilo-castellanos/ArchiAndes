import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { AProjects } from '../../api/qs/collections.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddPJForm: {
    /**
     * After successful form submission, go to List_PJ_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_PJ_Page');
    },
  },
});

Template.Add_PJ_Page.helpers({
  pjCollection() {
    return AProjects;
  },
});
