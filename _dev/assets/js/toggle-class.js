/**
 * クラスのトグル付与・削除
 * @param {element} elm 該当要素
 * @param {string} clName 付与・削除するクラス名
 */
function toggleClass(elm, clName){
  let result = elm.classList.contains(clName);
  if(result){
    // クラスがある場合、削除
    elm.classList.remove(clName);
  }else{
    // クラスがない場合、付与
    elm.classList.add(clName);
  }
}

export { toggleClass }