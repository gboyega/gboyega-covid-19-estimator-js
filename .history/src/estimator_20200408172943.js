const covid19ImpactEstimator = data => {
    const currentlyInfected = (sample) => s.reportedCases * 10;
    
  return {
    data, // the input data you got
    impact: {
        currentlyInfected: currentlyInfected(data);
    }, // your best case estimation
    severeImpact: {} // your severe case estimation
  };
};

export default covid19ImpactEstimator;