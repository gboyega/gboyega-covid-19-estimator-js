const currentlyInfected = sample => {
  return {
    impact: sample.reportedCases * 10,
    severeImpact: sample.report * 50
  };
};

export default currentlyInfected;
