const currentlyInfected = reportedCases => {
  return {
    impact: reportedCases * 10,
    severeImpact: reportedCases * 50
  };
};

const infectionsByRequestedTime = timeT  => {
  const factor = parseInt(timeToElapse / 3);
  return {};
};

export { currentlyInfected, infectionsByRequestedTime };
