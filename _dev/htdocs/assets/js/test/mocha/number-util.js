import assert from 'assert'
import { addNumber, subtractNumber, multiplyNumber, divideNumber } from '../../number-util'

describe('addNumber', function(){
  it('加算', function(){
    assert.equal( addNumber(1, 2), 3, '1 + 2 = 3');
    assert.equal( addNumber(10, -2), 8, '10 + -2 = 8');
  });
});

describe('subtractNumber', function(){
  it('減算', function(){
    assert.equal( subtractNumber(10, 2), 8, '10 + 2 = 12');
    assert.equal( subtractNumber(10, -6), 16, '10 - -6 = 16');
  });
});

describe('multiplyNumber', function(){
  it('乗算', function(){
    assert.equal( multiplyNumber(4, 5), 20, '4 * 5 = 20');
    assert.equal( multiplyNumber(3, -8), -24, '3 * -8 = -24');
    assert.equal( multiplyNumber(80, 0), 0, '80 * 0 = 0');
  });
});

describe('divideNumber', function(){
  it('除算', function(){
    assert.equal( divideNumber(3, 1), 3, '3 / 1 = 3');
    // assert.equal( divideNumber(10, 3), 3, '10 / 3 = 3');
  });
});