import currentlyInfected from './currentlyInfected';

console.log(currentlyInfected(20));
test('currentlyInfected function', () => {
  expect(currentlyInfected(20)).toBe({ impact: "200", severeImpact: 1000 });
});
