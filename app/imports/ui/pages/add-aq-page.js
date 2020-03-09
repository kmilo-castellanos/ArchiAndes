import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { QScenarios, ArchDecisions } from '../../api/qs/collections.js';


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

Template.Add_AQ_Page.helpers({

  not_empty_deCollection() {
    var qsElement= QScenarios.findOne(FlowRouter.getParam('_id'));
    //console.log(qsElement.name);
    var count=ArchDecisions.find({qs_name: qsElement.name},{sort: {name: 1}}).count();
    return count > 0;
  },
  aqCollection() {
    return AQScenarios;
  },
  getQS() {
    return QScenarios.findOne(FlowRouter.getParam('_id'));
  },
  deCollection() {
    var qsElement= QScenarios.findOne(FlowRouter.getParam('_id'));
    return ArchDecisions.find({qs_name: qsElement.name},{sort: {name: 1}});
  }

});

Template.Add_AQ_Page.events({
  'submit #uForm': function(event) {
    event.preventDefault();
    var rationaleValue = event.target.rationaleText.value;
    var qsElement= QScenarios.findOne(FlowRouter.getParam('_id'));
    //console.log("Entro a update"+qsElement._id+",rationale:"+rationaleValue);
    QScenarios.update(qsElement._id, {
      $set: { rationale: rationaleValue },
    });
  },
  'click .add'() {
    var qsElement= QScenarios.findOne(FlowRouter.getParam('_id'));
    //console.log("Entro a new decisions"+qsElement.name);
    FlowRouter.go("/add-de/" + qsElement._id);

    //Tasks.remove(qsElement._id);
  },
  'click .deleteDecision': function(event) {
    event.preventDefault();
    ArchDecisions.remove(this._id);
  },
});


