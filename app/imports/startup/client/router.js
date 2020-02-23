import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_QS_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_QS_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_QS_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_QS_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_QS_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_QS_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
