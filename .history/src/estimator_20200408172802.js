const covid19ImpactEstimator = data => {
    const currentlyInfected = (data) => data.reportedCases * 10;

    }
  return {
    data, // the input data you got
    impact: {
        currentlyInfected: cu
    }, // your best case estimation
    severeImpact: {} // your severe case estimation
  };
};

export default covid19ImpactEstimator;