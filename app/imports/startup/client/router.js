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


FlowRouter.route('/add-aq/:_id', {
  name: 'Add_AQ_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_AQ_Page' });
  },
});

FlowRouter.route('/add-aq-lc', {
  name: 'Add_AQ_LC_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_AQ_LC_Page' });
  },
});



FlowRouter.route('/list-co', {
  name: 'List_CO_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_CO_Page' });
  },
});

FlowRouter.route('/add-co', {
  name: 'Add_CO_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_CO_Page' });
  },
});

FlowRouter.route('/edit-co/:_id', {
  name: 'Edit_CO_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_CO_Page' });
  },
});


FlowRouter.route('/list-de', {
  name: 'List_DE_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_DE_Page' });
  },
});

FlowRouter.route('/add-de', {
  name: 'Add_DE_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_DE_Page' });
  },
});

FlowRouter.route('/add-de/:_id', {
  name: 'Add_DE_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_DE_Page' });
  },
});

FlowRouter.route('/edit-de/:_id', {
  name: 'Edit_DE_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_DE_Page' });
  },
});