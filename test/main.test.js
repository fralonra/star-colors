const starColors = require('../index');

describe('main.get', () => {
  test(`get ('NULL') to be null`, () => {
    expect(starColors.get('NULL')).toBe(null);
  });
  test(`get ('O5V')`, () => {
    expect(starColors.get('O5V')).toEqual({
      class: 'O5V',
      r: '155',
      g: '176',
      b: '255',
      hex: '#9bb0ff'
    });
  });
});
describe('main.randomRgb', () => {
  test(`randomRgb () to have a 'r' property`, () => {
    expect(starColors.randomRgb()).toHaveProperty('r');
  });
  test(`randomRgb () to have a 'g' property`, () => {
    expect(starColors.randomRgb()).toHaveProperty('g');
  });
  test(`randomRgb () to have a 'b' property`, () => {
    expect(starColors.randomRgb()).toHaveProperty('b');
  });
});
for (let i = 0; i < 10; ++i) {
  describe('main.randomHex', () => {
    test(`randomHex () to match a hex code: ${i + 1} times`, () => {
      expect(starColors.randomHex()).toMatch(/#([0-9a-f]){6}/);
    });
  });
}