const covid19ImpactEstimator = data => {
  export const currentlyInfected = sample => {
    return {
      impact: sample.reportedCases * 10,
      severeImpact: sample.reportedCases * 50
    };
  };

  const infectionsByRequestedTime = sample => {
      const factor = parseInt(timeToElapse / 3);
      return {

      }
  }

  return {
    data, // the input data you got
    impact: {
      currentlyInfected: currentlyInfected(data).impact
    }, // your best case estimation
    severeImpact: {
      currentlyInfected: currentlyInfected(data).severeImpact,
    } // your severe case estimation
  };
};

export default covid19ImpactEstimator;
