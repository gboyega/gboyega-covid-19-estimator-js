import { getCurrentlyInfected, getInfectionsByRequestedTime } from './Challenge1';
import {
  getSevereCasesByRequestedTime,
  getHospitalBedsByRequestedTime
} from './Challenge2';
const currentlyInfected = getCurrentlyInfected(20);
const infectionsByRequestedTime = getInfectionsByRequestedTime(currentlyInfected, 'weeks', 3);
const severeCasesByRequestedTime = getSevereCasesByRequestedTime(infectionsByRequestedTime);
const hospitalBedsByRequestedTime = getHospitalBedsByRequestedTime(severeCasesByRequestedTime, 12000)

console.log(currentlyInfected);
console.log(infectionsByRequestedTime);
console.log(severeCasesByRequestedTime);
console.log(hospitalBedsByRequestedTime);

test('getCurrentlyInfected function from Challenge1', () => {
  expect(currentlyInfected).toStrictEqual({
    impact: 200,
    severeImpact: 1000
  });
  expect(getCurrentlyInfected(50)).toStrictEqual({
    impact: 500,
    severeImpact: 2500
  });
});

test('getInfectionsByRequestedTime function from Challenge1', () => {
  expect(infectionsByRequestedTime).toStrictEqual({
    impact: 25600,
    severeImpact: 128000
  });

  expect(
    getInfectionsByRequestedTime(getCurrentlyInfected(20), 'days', 3)
  ).toStrictEqual({
    impact: 400,
    severeImpact: 2000
  });

  expect(
    getInfectionsByRequestedTime(getCurrentlyInfected(20), 'months', 3)
  ).toStrictEqual({
    impact: 214748364800,
    severeImpact: 1073741824000
  });
});

test('getSeverCasesByRequestedTime function from challenge 2', () => {
  expect(severeCasesByRequestedTime).toStrictEqual({
    impact: 3840,
    severeImpact: 19200
  });
});

test('getHospitalBedsByRequestedTime function from Challenge 2', () => {
  expect(hospitalBedsByRequestedTime).toStrictEqual({
    impact: 360,
    severeImpact: -15000
  });
});