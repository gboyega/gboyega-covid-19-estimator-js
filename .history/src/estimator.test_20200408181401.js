import currentlyInfected from './currentlyInfected.js';

console
test('currently infected function', () => {
  expect(currentlyInfected(20)).toBe({impact: 200, severeImpact: 1000});
});
