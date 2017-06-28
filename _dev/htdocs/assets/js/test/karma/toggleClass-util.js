import chai from 'chai'
import { toggleClass } from '../../toggleClass-util'

let assert = chai.assert;

describe('toggleClass', function(){
  it('トグルクラス(無)', function(){
    document.body.innerHTML = __html__['_dev/htdocs/assets/js/test/karma/toggleClass-util.html'];
    let main = document.querySelector('.main');

    assert.operator(main.className.indexOf('hoge'), '<', 0, 'hogeクラスは無');

    toggleClass(main, 'hoge');

    assert.operator(main.className.indexOf('hoge'), '>=', 0, 'hogeクラスは有');

    toggleClass(main, 'hoge');

    assert.operator(main.className.indexOf('hoge'), '<', 0, 'hogeクラスは無');
  });

  it('トグルクラス(有)', function(){
    document.body.innerHTML = __html__['_dev/htdocs/assets/js/test/karma/toggleClass-util.html'];
    let main = document.querySelector('.main');

    assert.operator(main.className.indexOf('fuga'), '>=', 0, 'fugaクラスは有');

    toggleClass(main, 'fuga');

    assert.operator(main.className.indexOf('fuga'), '<', 0, 'fugaクラスは無');

    toggleClass(main, 'fuga');

    assert.operator(main.className.indexOf('fuga'), '>=', 0, 'fugaクラスは有');
  });
});