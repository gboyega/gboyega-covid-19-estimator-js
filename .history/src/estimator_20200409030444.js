import { currentlyInfected,  } from './Challenge1';

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
  return {
    data, // the input data you got
    impact: {
      currentlyInfected: infected.impact
    }, // your best case estimation
    severeImpact: {
      currentlyInfected: infected.severeImpact
    } // your severe case estimation
  };
};

export default covid19ImpactEstimator;
