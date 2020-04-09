import { currentlyInfected } from './Challenge1';

console.log(currentlyInfected(20));
test('currentlyInfected function ', () => {
  expect(currentlyInfected(20)).toStrictEqual({
    impact: 200,
    severeImpact: 1000
  });
});
