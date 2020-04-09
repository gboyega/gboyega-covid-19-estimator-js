const currentlyInfected = sample => {
  return {
    impact: sample.reportedCases * 10,
    severeImpact: sample.reportedCase * 50
  };
};

export default currentlyInfected;
