//вариант 1 (вначале с компом творилась чертовщина и данный пример не работал / выдавало много ошибок в тестах типа NaN)

exports.min = function min (array) {
  let result; 
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    result = array.sort( (a, b) => a - b); 
    return result[0];
  }
}

exports.max = function min (array) {
  let result; 
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    result = array.sort( (a, b) => b - a); 
    return result[0];
  }
}

//вариант 2 (аналочигно первому варианту все тот же NaN)

/* 
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0; 
  return Math.min(...array);
};

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0; 
  return Math.max(...array);
};
*/

// после цикла заработали первые два варианта

/*
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
      return 0;
  }
  let min = array[0];  
  for (let num of array) {
      if (num < min){
          min = num;
      }
  }
  return min;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
      return 0;
  }
  let max = array[0];  
  for (let num of array) {
      if (num > max){
          max = num;
      }
  }
  return max;
}
*/


exports.avg = function avg (array) {
  let result = 0; 
  if (array === undefined || array.length === 0) return result; 
  for (let i=0; i<array.length; i++) { 
    result += array[i]; 
  } 
  return result / array.length; 
 };