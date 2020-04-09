import { currentlyInfected, infectionsByRequestedTime } from './Challenge1';

const covid19ImpactEstimator = data => {
  const {
    region,
    periodType,
    timeToElapse,
    reportedCases,
    population,
    totalHospitalBeds
  } = data;

  const infected = currentlyInfected(reportedCases);
  const infectionsByDate = infectionsByRequestedTime(infected, periodType, timeToElapse);
  return {
    data, // the input data you got
    impact: {
      currentlyInfected: infected.impact,
      infectionsByRequestedTime:
    }, // your best case estimation
    severeImpact: {
      currentlyInfected: infected.severeImpact,
      infectionsByRequestedTime
    } // your severe case estimation
  };
};

export default covid19ImpactEstimator;
