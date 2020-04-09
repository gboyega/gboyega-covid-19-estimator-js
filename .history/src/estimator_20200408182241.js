import currentlyInfected from './currentlyInfected';

const covid19ImpactEstimator = data => {
 

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
