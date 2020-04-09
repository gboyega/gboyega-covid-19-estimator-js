const getSevereCasesByRequestedTime = (infections) => {
  return {
    impact: (0.15 * infections.impact),
    severeImpact: (0.15 * infections.severeImpact)
  };
};

const getHospitalBedsByRequestedTime = (
  severeCasesByRequestedTime,
  totalHospitalBeds
) => {
  const usableBeds = 0.35 * totalHospitalBeds;
  return {
    impact: usableBeds - severeCasesByRequestedTime.impact,
    severeImpact: usableBeds - severeCasesByRequestedTime.severeImpact
  };
};

export { getSevereCasesByRequestedTime, getHospitalBedsByRequestedTime };
