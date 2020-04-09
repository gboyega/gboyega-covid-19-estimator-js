const currentlyInfected = sample => {
  return {
    impact: sample.reportedCas * 10,
    severeImpact: sample * 50
  };
};

export default currentlyInfected;
