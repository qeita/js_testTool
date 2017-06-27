/**
 * 任意の範囲で乱数取得
 * @param {number} min 最小値
 * @param {number} max 最大値
 */
function randomValue(min, max){
  return (Math.random() * ( (max + 1) - min )) + min;
//   return Math.random();
}

export { randomValue }