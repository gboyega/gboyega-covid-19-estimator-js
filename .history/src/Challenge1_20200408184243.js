const currentlyInfected = reportedCases => {
  return {
    impact: reportedCases * 10,
    severeImpact:  * 50
  };
};

const infectionsByRequestedTime =  => {
  const factor = parseInt(timeToElapse / 3);
  return {};
};

export { currentlyInfected, infectionsByRequestedTime };
