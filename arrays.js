
var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element) {
 return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  var newArr = array;
  newArr.unshift(element);
  return newArr;
}

function addElementToEndOfArray (array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray (array, element) {
  var updatedArr = array;
  updatedArr.push(element);
  return updatedArr;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  var nuArr = array;
  nuArr.shift(nuArr[0]);
  return nuArr;
} 
function removeElementFromBeginningOfArray (array) {
  array.shift(array[0]);
  return array;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  var niwArr = array;
  niwArr.pop(array);
  return niwArr;
}

function removeElementFromEndOfArray (array) {
  array.push(array);
  return array;
}