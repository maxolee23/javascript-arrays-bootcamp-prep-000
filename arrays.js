
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
  nuArr.shift();
  return nuArr;
} 