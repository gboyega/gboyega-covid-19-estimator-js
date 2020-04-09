const covid19ImpactEstimator = data => {
    const currentlyInfected = (data) => data.reported

    }
  return {
    data, // the input data you got
    impact: {}, // your best case estimation
    severeImpact: {} // your severe case estimation
  };
};

export default covid19ImpactEstimator;
