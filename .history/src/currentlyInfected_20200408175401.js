const currentlyInfected = sample => {
  return {
    impact: sample.reportedCases * 10,
    severeImpact: sample.reported * 50
  };
};

export default currentlyInfected;
