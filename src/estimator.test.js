import covid19ImpactEstimator from './estimator';

import {
  getCurrentlyInfected,
  getInfectionsByRequestedTime
} from './Challenge1';

import {
  getSevereCasesByRequestedTime,
  getHospitalBedsByRequestedTime
} from './Challenge2';

import {
  getCasesForICUByRequestedTime,
  getCasesForVentilatorsByRequestedTime,
  getDollarsInFlight
} from './Challenge3';

const currentlyInfected = getCurrentlyInfected(20);

const infectionsByRequestedTime = getInfectionsByRequestedTime(
  currentlyInfected,
  'weeks',
  3
);

const severeCasesByRequestedTime = getSevereCasesByRequestedTime(
  infectionsByRequestedTime
);

const hospitalBedsByRequestedTime = getHospitalBedsByRequestedTime(
  severeCasesByRequestedTime,
  12000
);

const casesForICUByRequestedTime = getCasesForICUByRequestedTime(
  infectionsByRequestedTime
);

const casesForVentilatorsByRequestedTime = getCasesForVentilatorsByRequestedTime(
  infectionsByRequestedTime
);

const dollarsInFlight = getDollarsInFlight(
  infectionsByRequestedTime,
  {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  3,
  'weeks'
);

const estimated = covid19ImpactEstimator({
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 4,
    avgDailyIncomePopulation: 0.73
  },
  periodType: 'days',
  timeToElapse: 38,
  reportedCases: 2747,
  population: 92931687,
  totalHospitalBeds: 678874
});

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

test('getCasesForICUByRequestedTime function from challenge 3', () => {
  expect(casesForICUByRequestedTime).toStrictEqual({
    impact: 1280,
    severeImpact: 6400
  });
});

test('getCasesForVentilatorsByRequestedTime function from challenge 3', () => {
  expect(casesForVentilatorsByRequestedTime).toStrictEqual({
    impact: 512,
    severeImpact: 2560
  });
});

test('getDollarsInFlight function from challenge 3', () => {
  expect(dollarsInFlight).toStrictEqual({
    impact: 4327,
    severeImpact: 21638
  });
});

test('covid19impactestimator function from estimator.js', () => {
  expect(estimated).toStrictEqual({
    data: {
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 4,
        avgDailyIncomePopulation: 0.73
      },
      periodType: 'days',
      timeToElapse: 38,
      reportedCases: 2747,
      population: 92931687,
      totalHospitalBeds: 678874
    },
    impact: {
      currentlyInfected: 27470,
      infectionsByRequestedTime: 112517120,
      severeCasesByRequestedTime: 16877568,
      hospitalBedsByRequestedTime: -16639962,
      casesForICUByRequestedTime: 5625856,
      casesForVentilatorsByRequestedTime: 2250342,
      dollarsInFlight: 8646052
    },
    severeImpact: {
      currentlyInfected: 137350,
      infectionsByRequestedTime: 562585600,
      severeCasesByRequestedTime: 84387840,
      hospitalBedsByRequestedTime: -84150234,
      casesForICUByRequestedTime: 28129280,
      casesForVentilatorsByRequestedTime: 11251712,
      dollarsInFlight: 43230261
    }
  });
});
