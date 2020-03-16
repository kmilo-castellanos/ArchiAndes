import { _ } from 'meteor/underscore';
import { QAttributes,QAMetrics,Viewpoints,Tactics,Units,ConstraintTypes, AProjects} from '../../api/qs/collections.js';

/**
 * A list of seeds to pre-fill the Collection.
 * @type {*[]}
 */


const qASeeds = [
  { name: 'Availability' },
  { name: 'Performance'},
  { name: 'Modifiability'},
  { name: 'Testability'},
  { name: 'Scalability'},
];

const metricsSeeds = [
  { name: 'Latency' , qa:'Performance', dim:'Time'},
  { name: 'Throughput', qa:'Performance', dim:'DataTransfer' },
  { name: 'Deadline',qa:'Performance', dim:'Time'},
  { name: 'Update Time', qa:'Modifiability', dim:'Time'},
];

const coTypesSeeds = [
  { name: 'Technology'},
  { name: 'Vendor' },
  { name: 'Environment'},
  { name: 'Cloud Model' }
];

const unitsSeeds = [
  { name: 'Hours' , dim:'Time'},
  { name: 'Minutes' , dim:'Time'},
  { name: 'Seconds' , dim:'Time'},
  { name: 'Millis' , dim:'Time'},
  { name: 'Bits/seg', dim:'DataTransfer' },
  { name: 'Messages/seg', dim:'DataTransfer' }
];

const viewpointSeeds = [
  { name: 'Functional' },
  { name: 'Deployment' },
  { name: 'Concurrency'},
  { name: 'Information'},
  { name: 'Development'},
  { name: 'Operational'}
];


const tacticsSeeds = [
  { name: 'Increase Available Resources', group:'Resource Management', qa:'Performance'},
  { name: 'Mantain Multiple Copies', group:'Resource Management',qa:'Performance'},
  { name: 'Introduce Concurrency', group:'Resource Management',qa:'Performance'},
  { name: 'Increase Computation Efficiency', group:'Resource Demand',qa:'Performance'},
  { name: 'Reduce Computational Overhead', group:'Resource Demand',qa:'Performance'},
  { name: 'Manage Event Rate', group:'Resource Demand',qa:'Performance'},
  { name: 'Control Frequency of Sampling', group:'Resource Demand',qa:'Performance'},  
  { name: 'Scheduling Policy', group:'Resource Arbitration',qa:'Performance'},
  { name: 'Runtime Registration', group:'Defer Binding Time',qa:'Modifiability'}  

];
/**
 * Initialize the collections if empty with seed data.
 */

if (QAttributes.find().count() === 0) {
  _.each(qASeeds, function seedQA(qa) {
    QAttributes.insert(qa);
  });
}

if (QAMetrics.find().count() === 0) {
  _.each(metricsSeeds, function seedQAMetric(qametric) {
    QAMetrics.insert(qametric);
  });
}

if (Units.find().count() === 0) {
  _.each(unitsSeeds, function seedUnit(unit) {
    Units.insert(unit);
  });
}

if (Viewpoints.find().count() === 0) {
  _.each(viewpointSeeds, function seedViewpoint(v) {
    Viewpoints.insert(v);
  });
}

if (ConstraintTypes.find().count() === 0) {
  _.each(coTypesSeeds, function seedType(coType) {
    ConstraintTypes.insert(coType);
  });
}



if (Tactics.find().count() === 0) {
  _.each(tacticsSeeds, function seedTactic(tactic) {
    Tactics.insert(tactic);
  });
}

if (Meteor.isServer) {
  AProjects._ensureIndex({ name: 1, owner: 1 }, { unique: true })
}

