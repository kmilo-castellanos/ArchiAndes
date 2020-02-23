import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

export const QAttributes = new Mongo.Collection('QAttributes');

export const QScenarios= new Mongo.Collection('QScenarios');

export const QAMetrics= new Mongo.Collection('QAMetrics');



/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'Bicycle',
    },
  },
  quantity: {
    label: 'Quantity',
    type: Number,
    optional: false,
    autoform: {
      group: 'Stuff',
      placeholder: '3',
    },
  },
});


/**
 * Create the schema for QS
 */
export const QSSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'QS',
      placeholder: 'Name/Code',
    },
  },
  source: {
    label: 'Source',
    type: String,
    optional: false,
    autoform: {
      group: 'QS',
      placeholder: 'Source',
    },
  },
  stimulus: {
    label: 'Stimulus',
    type: String,
    optional: false,
    autoform: {
      group: 'QS',
      placeholder: 'Stimulus',
    },
  },
  artifact: {
    label: 'Artifact Description',
    type: String,
    optional: false,
    autoform: {
      group: 'QS',
      placeholder: 'Artifact (description)',
    },
  },
  environment: {
    label: 'Environment',
    type: String,
    optional: false,
    autoform: {
      group: 'QS',
      placeholder: 'Environment',
    },
  },
  response: {
    label: 'Response',
    type: String,
    optional: false,
    autoform: {
      group: 'QS',
      placeholder: 'Response',
    },
  },
  qa: {
    label: 'Quality Attribute',
    type: String,
    optional:false,
    /*autoValue: function() {
      this.unset();
    },*/
    autoform: {
      group: 'QS',
      options: function() {
        return QAttributes.find({},{sort: {name: 1}}).map(function(qa){return {label: qa.name, value: qa.name}});
      }
    }
  },
  qametric: {
    label: 'Metric',
    type: String,
    optional:false,
    /*autoValue: function() {
      this.unset();
    },*/
    autoform: {
      group: 'Response Measure',
      options: function() {
        return QAMetrics.find({},{sort: {name: 1}}).map(function(qa){return {label: qa.name, value: qa.name}});
      }
    }
  },
});


QScenarios.attachSchema(QSSchema);
Stuff.attachSchema(StuffSchema);

