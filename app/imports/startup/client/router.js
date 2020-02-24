import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list-pj', {
  name: 'List_PJ_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_PJ_Page' });
  },
});

FlowRouter.route('/add-pj', {
  name: 'Add_PJ_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_PJ_Page' });
  },
});

FlowRouter.route('/edit-pj/:_id', {
  name: 'Edit_PJ_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_PJ_Page' });
  },
});



FlowRouter.route('/list-qs', {
  name: 'List_QS_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_QS_Page' });
  },
});

FlowRouter.route('/add-qs', {
  name: 'Add_QS_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_QS_Page' });
  },
});

FlowRouter.route('/edit-qs/:_id', {
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
