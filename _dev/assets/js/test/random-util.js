import chai from 'chai'
import { randomValue } from '../random-util'

let assert = chai.assert;

describe('randomValue', () => {
  it('乱数出力', () => {
    // let v = randomValue(0, 1);
    let v = randomValue(4, 6);
    console.log(v);
    // assert.operator( v, '<', 6, 'v < 6');
  });
});