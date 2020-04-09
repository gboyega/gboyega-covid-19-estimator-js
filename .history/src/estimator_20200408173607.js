const covid19ImpactEstimator = data => {
  const currentlyInfected = sample => {
    return sample.reportedCases * 10;
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
