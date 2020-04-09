const currentlyInfected = reportedCases => {
  return {
    impact: reportedCases * 10,
    severeImpact: reportedCases * 50
  };
};

const infectionsByRequestedTime = (
  currentlyInfected,
  periodType,
  timeToElapse
) => {
  if (periodType === 'days') {
    const factor = Math.trunc(timeToElapse / 3);
  } else if (periodType === 'weeks') {
    const factor = Math.trunc((timeToElapse * 7) / 3);
  } else {
    const factor = Math.trunc((timeToElapse * 30) / 3);
  };

  const impact = currentlyInfected.impact * Math(2, factor);
  const severeImpact = currentlyInfected.severeImpact * Math.pow(2, factor);
  return {
    impact,
    severeImpact
  };
};

export { currentlyInfected, infectionsByRequestedTime };
