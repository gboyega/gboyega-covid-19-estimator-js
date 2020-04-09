import { currentlyInfected, infectionsByRequestedTime } from './Challenge1';

console.log(currentlyInfected(20));
console.log(infectionsByRequestedTime(100, "wee"));

test('currentlyInfected function from Challenge1', () => {
  expect(currentlyInfected(20)).toStrictEqual({
    impact: 200,
    severeImpact: 1000
  });
  expect(currentlyInfected(50)).toStrictEqual({
    impact: 500,
    severeImpact: 5000
  });
});

