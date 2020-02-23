import { _ } from 'meteor/underscore';
import { Stuff,QAttributes,QAMetrics,Units} from '../../api/qs/collections.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { name: 'Basket', quantity: 3 },
  { name: 'Bicycle', quantity: 2 },
];

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

const unitsSeeds = [
  { name: 'Hours' , dim:'Time'},
  { name: 'Minutes' , dim:'Time'},
  { name: 'Seconds' , dim:'Time'},
  { name: 'Millis' , dim:'Time'},
  { name: 'Bits/seg', dim:'DataTransfer' },
  { name: 'Messages/seg', dim:'DataTransfer' }
];


/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
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