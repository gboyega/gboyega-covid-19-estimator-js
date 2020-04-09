const covid19ImpactEstimator = data => {
  const currentlyInfected = sample => {
    return {
      impact: sample.reportedCases * 10,
      severeImpact: sample.reported
    };
  };

  return {
    data, // the input data you got
    impact: {
      currentlyInfected: currentlyInfected(data),
      hfhf
    }, // your best case estimation
    severeImpact: {} // your severe case estimation
  };
};

export default covid19ImpactEstimator;
