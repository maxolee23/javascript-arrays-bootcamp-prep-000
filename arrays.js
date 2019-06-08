
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
  var nilArr = array;
  nilArr.shift(nilArr[0]);
  return nilArr;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  var niwArr = array;
  niwArr.pop(array);
  return niwArr;
}

function removeElementFromEndOfArray (array) {
  array.pop(array);
  return array;
}