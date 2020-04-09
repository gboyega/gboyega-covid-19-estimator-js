const getSevereCasesByRequestedTime = (infections) => ({
  impact: Math.trunc(0.15 * infections.impact),
  severeImpact: Math.trunc(0.15 * infections.severeImpact)
});

const getHospitalBedsByRequestedTime = (
  severeCasesByRequestedTime,
  totalHospitalBeds
) => {
  const usableBeds = Math.trunc(0.35 * totalHospitalBeds);
  return {
    impact: usableBeds - severeCasesByRequestedTime.impact,
    severeImpact: usableBeds - severeCasesByRequestedTime.severeImpact
  };
};

export { getSevereCasesByRequestedTime, getHospitalBedsByRequestedTime };
