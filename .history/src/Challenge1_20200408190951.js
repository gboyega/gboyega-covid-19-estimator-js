const currentlyInfected = reportedCases => {
  return {
    impact: reportedCases * 10,
    severeImpact: reportedCases * 50
  };
};

const infectionsByRequestedTime = timeToElapse  => {
  const factor = Math.(timeToElapse / 3);
  return {};
};

export { currentlyInfected, infectionsByRequestedTime };
