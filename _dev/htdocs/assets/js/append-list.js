/**
 * リストを動的追加
 * @param {element} ul リストを包括する要素
 * @param {string} text リストに表示させる文字
 */
function appendList(ul, text){
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

export { appendList }