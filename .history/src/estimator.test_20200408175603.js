import currentlyInfected from './currentlyInfected.js';

test('currently infected function', () => {
  expect(currentlyInfected(20)).toBe({impact: 2});
});