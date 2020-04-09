const currentlyInfected = sample => {
  return {
    impact: sample * 10,
    severeImpact: sample * 50
  };
};

const infectionsByRequestedTime = fact => {
  const factor = parseInt(timeToElapse / 3);
  return {};
};

export { currentlyInfected, infectionsByRequestedTime };
