import chai from 'chai'
import { toggleClass } from '../../toggle-class'

let assert = chai.assert;

describe('toggleClass', function(){
  it('トグルクラス(無)', function(){
    document.body.innerHTML = __html__['_dev/assets/js/test/karma/toggle-class.html'];
    let main = document.querySelector('.main');

    assert.operator(main.className.indexOf('hoge'), '<', 0, 'hogeクラスは無');

    toggleClass(main, 'hoge');

    assert.operator(main.className.indexOf('hoge'), '>=', 0, 'hogeクラスは有');

    toggleClass(main, 'hoge');

    assert.operator(main.className.indexOf('hoge'), '<', 0, 'hogeクラスは無');
  });

  it('トグルクラス(有)', function(){
    document.body.innerHTML = __html__['_dev/assets/js/test/karma/toggle-class.html'];
    let main = document.querySelector('.main');

    assert.operator(main.className.indexOf('fuga'), '>=', 0, 'fugaクラスは有');

    toggleClass(main, 'fuga');

    assert.operator(main.className.indexOf('fuga'), '<', 0, 'fugaクラスは無');

    toggleClass(main, 'fuga');

    assert.operator(main.className.indexOf('fuga'), '>=', 0, 'fugaクラスは有');
  });
});