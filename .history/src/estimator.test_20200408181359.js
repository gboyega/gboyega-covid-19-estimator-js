import currentlyInfected from './currentlyInfected.js';

c
test('currently infected function', () => {
  expect(currentlyInfected(20)).toBe({impact: 200, severeImpact: 1000});
});
