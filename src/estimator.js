import {
  getCurrentlyInfected,
  getInfectionsByRequestedTime
} from './Challenge1';
import {
  getSevereCasesByRequestedTime,
  getHospitalBedsByRequestedTime
} from './Challenge2';

const covid19ImpactEstimator = (data) => {
  const {
    // region,
    periodType,
    timeToElapse,
    reportedCases,
    // population,
    totalHospitalBeds
  } = data;

  const currentlyInfected = getCurrentlyInfected(reportedCases);
  const infectionsByRequestedTime = getInfectionsByRequestedTime(
    currentlyInfected,
    periodType,
    timeToElapse
  );
  const severeCasesByRequestedTime = getSevereCasesByRequestedTime(
    infectionsByRequestedTime
  );
  const hospitalBedsByRequestedTime = getHospitalBedsByRequestedTime(
    severeCasesByRequestedTime,
    totalHospitalBeds
  );

  return {
    data, // the input data
    impact: {
      currentlyInfected: currentlyInfected.impact,
      infectionsByRequestedTime: infectionsByRequestedTime.impact,
      severeCasesByRequestedTime: severeCasesByRequestedTime.impact,
      hospitalBedsByRequestedTime: hospitalBedsByRequestedTime.impact
    }, // best case estimation
    severeImpact: {
      currentlyInfected: currentlyInfected.severeImpact,
      infectionsByRequestedTime: infectionsByRequestedTime.severeImpact,
      severeCasesByRequestedTime: severeCasesByRequestedTime.severeImpact,
      hospitalBedsByRequestedTime: hospitalBedsByRequestedTime.severeImpact
    } // severe case estimation
  };
};

export default covid19ImpactEstimator;
