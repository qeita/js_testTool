import assert from 'assert'
import { appendList } from '../../append-list'

describe('appendList', function(){
  it('リスト追加', function(){
    // document.body.innerHTML = '<ul class="list"></ul>';
    document.body.innerHTML = __html__['_dev/htdocs/assets/js/test/karma/append-list.html'];

    let ul = document.querySelector('.list');
    assert.equal(ul.children.length, 0, '最初は0件');

    appendList(ul, '要素1');

    assert.equal(ul.children.length, 1, '件数1件');
    assert.equal(ul.children[0].textContent, '要素1');
  });
});