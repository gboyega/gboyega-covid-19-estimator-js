const currentlyInfected = sample => {
  return {
    impact: sample * 10,
    severeImpact: sample * 50
  };
};




export default currentlyInfected;
