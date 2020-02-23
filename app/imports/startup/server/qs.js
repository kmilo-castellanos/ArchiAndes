import { _ } from 'meteor/underscore';
import { Stuff,QAttributes,QAMetrics } from '../../api/qs/collections.js';

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
  { name: 'Latency' , qa:'Performance'},
  { name: 'Throughput', qa:'Performance' },
  { name: 'Deadline',qa:'Performance'},
  { name: 'Update Time', qa:'Modifiability'},
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