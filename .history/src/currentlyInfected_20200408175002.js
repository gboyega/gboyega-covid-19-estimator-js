export const currentlyInfected = sample => {
  return {
    impact: sample.reportedCases * 10,
    severeImpact: sample.reportedCases * 50
  };
};

export default 