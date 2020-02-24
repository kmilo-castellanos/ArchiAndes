import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

export const QAttributes = new Mongo.Collection('QAttributes');

export const QScenarios= new Mongo.Collection('QScenarios');

export const QAMetrics= new Mongo.Collection('QAMetrics');

export const Units= new Mongo.Collection('Units');

export const AProjects= new Mongo.Collection('AProjects');


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
 * Create the schema for Project
 */
export const AProjectSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Project',
      placeholder: 'Project name',
    },
  }
});


/**
 * Create the schema for QS
 */
export const QSSchema = new SimpleSchema({
  
  project: {
    label: 'Project',
    type: String,
    optional:false,
    autoform: {
      firstOption: 'Select Project',
      group: 'Quality Scenario',
      options: function() {
        return AProjects.find({},{sort: {name: 1}}).map(function(pj){return {label: pj.name, value: pj.name}});
      }
    }
  },
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Quality Scenario',
      placeholder: 'Name/Code',
    },
  },
  source: {
    label: 'Source',
    type: String,
    optional: false,
    autoform: {
      group: 'Quality Scenario',
      placeholder: 'Source',
    },
  },
  stimulus: {
    label: 'Stimulus',
    type: String,
    optional: false,
    autoform: {
      group: 'Quality Scenario',
      placeholder: 'Stimulus',
    },
  },
  artifact: {
    label: 'Artifact Description',
    type: String,
    optional: false,
    autoform: {
      group: 'Quality Scenario',
      placeholder: 'Artifact (description)',
    },
  },
  environment: {
    label: 'Environment',
    type: String,
    optional: false,
    autoform: {
      group: 'Quality Scenario',
      placeholder: 'Environment',
    },
  },
  response: {
    label: 'Response',
    type: String,
    optional: false,
    autoform: {
      group: 'Quality Scenario',
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
      firstOption: 'Select Quality Attribute',
      group: 'Quality Scenario',
      options: function() {
        return QAttributes.find({},{sort: {name: 1}}).map(function(qa){return {label: qa.name, value: qa.name}});
      }
    }
  },
  qametric: {
    label: 'Metric',
    type: String,
    allowedValues: function() {
      return QAMetrics.find({}).map(function(metric){return metric.name;});
    },
    autoform: {
      group: 'Response Measure',
      firstOption: 'Select Metric',
      options: function() {
        var selqa = AutoForm.getFieldValue('qa');
        return QAMetrics.find({qa: selqa},{sort: {name: 1}}).map(function(metric){return {label: metric.name, value: metric.name}});
      }
    }
  },
  unit: {
    label: 'Unit',
    type: String,
    allowedValues: function() {
      return Units.find({}).map(function(unit){return unit.name;});
    },
    autoform: {
      group: 'Response Measure',
      firstOption: 'Select Unit',
      options: function() {
        /*var seldim = AutoForm.getFieldValue('dim');
        return Units.find({dim: seldim},{sort: {name: 1}}).map(function(unit){return {label: unit.name, value: unit.name}});*/
        return Units.find({},{sort: {dim: 1}}).map(function(unit){return {label: unit.name, value: unit.name}});

      }
    }
  },
  minVal: {
    label: 'Min Value',
    type: Number,
    decimal: true,
    optional: false,
    autoform: {
      group: 'Response Measure',
      placeholder: '0'
    },
  },
  maxVal: {
    label: 'Max Value',
    type: Number,
    decimal: true,
    optional: false,
    autoform: {
      group: 'Response Measure',
      placeholder: '0'
    },
  }
});

AProjects.attachSchema(AProjectSchema);
QScenarios.attachSchema(QSSchema);
Stuff.attachSchema(StuffSchema);
