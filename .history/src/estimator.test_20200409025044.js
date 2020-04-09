import { currentlyInfected, infectionsByRequestedTime } from './Challenge1';

console.log(currentlyInfected(20));
console.log(infectionsByRequestedTime(currentlyInfected(20), 'weeks', 3));

test('currentlyInfected function from Challenge1', () => {
  expect(currentlyInfected(20)).toStrictEqual({
    impact: 200,
    severeImpact: 1000
  });
  expect(currentlyInfected(50)).toStrictEqual({
    impact: 500,
    severeImpact: 2500
  });
});

test('infectionsByRequestedTime function from Challenge1', () => {
  expect(infectionsByRequestedTime(currentlyInfected(20), 'weeks', 3)).toStrictEqual({
    impact: 256,
    severeImpact :
  })
})