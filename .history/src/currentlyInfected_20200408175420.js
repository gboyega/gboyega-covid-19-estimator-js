const currentlyInfected = sample => {
  return {
    impact: sample.repor * 10,
    severeImpact: sample * 50
  };
};

export default currentlyInfected;
