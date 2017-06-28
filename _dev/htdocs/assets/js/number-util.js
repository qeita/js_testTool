/**
 * 加算
 * @param {number} num1 値1
 * @param {number} num2 値2
 */
function addNumber(num1, num2){
  return num1 + num2;
}

/**
 * 減算
 * @param {number} num1 値1
 * @param {number} num2 値2
 */
function subtractNumber(num1, num2){
  return num1 - num2;
}

/**
 * 乗算
 * @param {number} num1 値1
 * @param {number} num2 値2
 */
function multiplyNumber(num1, num2){
  return num1 * num2;
}

/**
 * 除算
 * @param {number} num1 値1
 * @param {number} num2 値2
 */
function divideNumber(num1, num2){
//   return parseInt(num1 / num2, 10);
  return num1 / num2;
}


export { addNumber, subtractNumber, multiplyNumber, divideNumber }