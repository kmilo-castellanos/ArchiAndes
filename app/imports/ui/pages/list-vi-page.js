import { Template } from 'meteor/templating';
import { Viewpoints } from '../../api/qs/collections.js'; 

Template.List_VI_Page.helpers({

  /**
   * @returns {*} All of the Projects.
   */
  viewList() {
    return Viewpoints.find({},{sort: {name: 1}});
  },
  not_empty_viewList() {
    return Viewpoints.find({},{sort: {name: 1}}).count() > 0;
  },
});
