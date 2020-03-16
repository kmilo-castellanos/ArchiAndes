import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */


/**
 * Initial Enumerations
 * 
*/

export const QAttributes = new Mongo.Collection('QAttributes');

export const QAMetrics= new Mongo.Collection('QAMetrics');

export const ConstraintTypes= new Mongo.Collection('ConstraintTypes');

export const Units= new Mongo.Collection('Units');

export const Viewpoints= new Mongo.Collection('Viewpoints');

export const Tactics= new Mongo.Collection('Tactics');



/**
 * Drivers
 * 
*/

export const AProjects= new Mongo.Collection('AProjects');

export const Constraints= new Mongo.Collection('Constraints');

export const QScenarios= new Mongo.Collection('QScenarios');

export const AQScenarios= new Mongo.Collection('AQScenarios');

export const ArchDecisions= new Mongo.Collection('ArchDecisions');

export const ArchModels= new Mongo.Collection('ArchModels');




/**
 * Create the schema for Project
 */
export const AProjectSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Project',
      placeholder: 'Project name',
    },
  },
  owner:{
    type: String,
    autoform: {
      type: 'hidden'
    },
    autoValue: function() {
      if (this.isInsert) {
        return this.userId;
      } 
    }  
  },
  createdAt: {
    type: Date,
    autoform: {
      type: 'hidden'
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  }
});

/**
 * Create the schema for AQSchema
 */
export const AQSchema = new SimpleSchema({
  name: {
    label: 'Code',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Analyzed Quality Scenario',
      placeholder: 'Code',
    },
  }
});

/**
 * Create the schema for Architecture Decisions
 */
export const ArchDecisionSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 100,
    autoform: {
      group: 'Architectural Decision',
      placeholder: 'Name',
    },
  },
 
  qs_name: {
    label: 'Quality Scenario',
    type: String,
    optional: true,
    max: 100,
    autoform: {
      group: 'Architectural Decision',
      firstOption: 'Select QS',
      options: function() {
        var pNames=[];
        var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
        projLs.forEach(function(p){
          pNames.push(p.name);
        })
        return QScenarios.find({project: {$in: pNames} },{sort: {name: 1}}).map(function(pj){return {label: pj.name, value: pj.name}});
      }
    },
  },
  tactic: {
    label: 'Tactic',
    type: String,
    optional: false,
    autoform: {
      group: 'Architectural Decision',
      firstOption: 'Select Tactic',
      options: function() {
        return Tactics.find({},{sort: {qa: 1,name: 1}}).map(function(tac){return {label: tac.qa + "/" + tac.name, value: tac.name}});
      }
    },
  },
  model_name: {
    label: 'Model',
    type: String,
    optional: true,
    max: 100,
    autoform: {
      group: 'Architectural Decision',
      firstOption: 'Select Model',
      options: function() {
        var pNames=[];
        var projLs = AProjects.find({owner: Meteor.userId()},{sort: {name: 1}});
        projLs.forEach(function(p){
          pNames.push(p.name);
        })
        return ArchModels.find({project: {$in: pNames} },{sort: {name: 1}}).map(function(m){return {label: m.view + " - " +m.name, value: m.name}});
      }
    },
  },
  sensitivity: {
    label: 'Sensitivity',
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: 'Architectural Decision',
      placeholder: 'Code',
    },
  },
  tradeoff: {
    label: 'Tradeoff',
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: 'Architectural Decision',
      placeholder: 'Code',
    },
  },
  risk: {
    label: 'Risk',
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: 'Architectural Decision',
      placeholder: 'Code',
    },
  },
  norisk: {
    label: 'No Risk',
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: 'Architectural Decision',
      placeholder: 'Code',
    },
  },
  rationale: {
    label: 'Reasoning',
    type: String,
    optional: false,
    max: 200,
    autoform: {
      group: 'Architectural Decision',
      placeholder: 'Reasoning',
      afFieldInput: {
        type: "textarea",
        rows: 3
      }
    },
  }
});


/**
 * Create the schema for Constraints
 */
export const ConstraintSchema = new SimpleSchema({
  code: {
    label: 'Code',
    type: String,
    optional: false,
    max: 100,
    autoform: {
      group: 'Constraint',
      placeholder: 'Code',
    },
  },
  project: {
    label: 'Project',
    type: String,
    optional:false,
    autoform: {
      firstOption: 'Select Project',
      group: 'Constraint',
      options: function() {
        return AProjects.find({owner: Meteor.userId()},{sort: {name: 1}}).map(function(pj){return {label: pj.name, value: pj.name}});
      }
    }
  },
  description: {
    label: 'Description',
    type: String,
    optional: false,
    max: 200,
    autoform: {
      group: 'Constraint',
      placeholder: 'Description',
    },
  },
  type: {
    label: 'Type',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      firstOption: 'Select Type',
      group: 'Constraint',
      options: function() {
        return ConstraintTypes.find({},{sort: {name: 1}}).map(function(pj){return {label: pj.name, value: pj.name}});
      }
    },
  },  
  value: {
    label: 'Value',
    type: String,
    optional: false,
    max: 200,
    autoform: {
      group: 'Constraint',
      placeholder: 'Value',
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
        return AProjects.find({owner: Meteor.userId()},{sort: {name: 1}}).map(function(pj){return {label: pj.name, value: pj.name}});
      }
    }
  },
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 100,
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
  },
  rationale: {
    type: String,
    optional: true,
    max: 300,
    autoform: {
        type: "hidden"
    }
  }  
});

/**
 * Create the schema for AQSchema
 */
export const ArchModelSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 100,
    autoform: {
      group: 'Model',
      placeholder: 'Name',
    },
  },
  view: {
    type: String,
    optional: false,
    autoform: {
      group: 'Model',
      firstOption: 'Select Unit',
      options: function() {
        return Viewpoints.find({},{sort: {name: 1}}).map(function(v){return {label: v.name, value: v.name}});
      }

    }
  },
  project: {
    label: 'Project',
    type: String,
    optional:false,
    autoform: {
      firstOption: 'Select Project',
      group: 'Model',
      options: function() {
        return AProjects.find({owner: Meteor.userId()},{sort: {name: 1}}).map(function(pj){return {label: pj.name, value: pj.name}});
      }
    }
  },
  xml: {
    label: 'xml',
    type: String,
    optional: true,
    autoform: {
      type: 'hidden'
    },
  },
  data: {
    label: 'data',
    type: String,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  }  
});

AProjects.attachSchema(AProjectSchema);
QScenarios.attachSchema(QSSchema);
Constraints.attachSchema(ConstraintSchema);
AQScenarios.attachSchema(AQSchema);
ArchDecisions.attachSchema(ArchDecisionSchema);
ArchModels.attachSchema(ArchModelSchema);