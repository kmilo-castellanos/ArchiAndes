import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');


export const QScenarios= new Mongo.Collection('QScenarios');


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
});


QScenarios.attachSchema(QSSchema);
Stuff.attachSchema(StuffSchema);

