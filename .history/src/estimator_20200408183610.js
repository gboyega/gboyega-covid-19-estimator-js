import currentlyInfected from './currentlyInfected';
const covid19ImpactEstimator = data => {
  

  return {
    data, // the input data you got
    impact: {
      currentlyInfected: currentlyInfected(data.reportedCases).impact
    }, // your best case estimation
    severeImpact: {
      currentlyInfected: currentlyInfected(data.reportedCases).severeImpact
    } // your severe case estimation
  };
};

export default covid19ImpactEstimator;
