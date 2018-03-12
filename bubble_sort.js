// var array = [4, 9807, 2, 465, 356, 890]

function bubbleSort(array) {
  var length = array.length-1;
    for(var i = 0; i < length; i++) {
      for( var j = 0; j < length-i; j++) {
      if (array[j] > array[j+1]) {
      [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}

module.exports = bubbleSort
