import { Template } from 'meteor/templating';
import { AProjects } from '../../api/qs/collections.js'; 

Template.List_PJ_Page.helpers({

  /**
   * @returns {*} All of the Projects.
   */
  pjList() {
    var ls=AProjects.find();
    console.log(ls);
    return ls;
  },
  not_empty_pjList() {
    var count=AProjects.find().count();
    console.log(count);
    return count > 0;
  },
});
