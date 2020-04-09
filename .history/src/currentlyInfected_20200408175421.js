const currentlyInfected = sample => {
  return {
    impact: sample.re * 10,
    severeImpact: sample * 50
  };
};

export default currentlyInfected;
