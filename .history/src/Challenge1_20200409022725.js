const currentlyInfected = (reportedCases) => {
  return {
    impact: reportedCases * 10,
    severeImpact: reportedCases * 50
  };
};

const infectionsByRequestedTime = (currentlyInfected, periodType, timeToElapse) => {
  if (period)
  const factor = Math.trunc(sample.timeToElapse / 3);

  const currentlyInfected = currentlyInfected(sample.reportedCases); 

  const impact = currentlyInfected.impact * Math.pow(2, factor);
  const severeImpact = currentlyInfected.severeImpact * Math.pow(2, factor);
  return {
    impact,
    severeImpact 
  };
};

export { currentlyInfected, infectionsByRequestedTime };
